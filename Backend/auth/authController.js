const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const anwesenheitDB = require('../database/anwesenheitDB');

const registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        await AdminModel.createAdmin(req.body.username, hashedPassword);
        res.status(201).send("User registered successfully.");
    } catch (error) {
        res.status(500).send("There was a problem registering the user.");
    }
};

const loginUser = (req, res) => {
    const { username, password } = req.body;

    const handleLogin = (user, role) => {
    
        if (password !== user.Password) {
            console.log("Invalid password");
            return res.status(401).send({ auth: false, token: null });
        }
    
        const token = jwt.sign({ id: user.id, role: role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.send({ auth: true, token: token, userRole: role, userId: user.Schueler_ID });
    };
    
    anwesenheitDB.query("SELECT * FROM admin WHERE username = ?", [username], (error, adminResults) => {
        if (error) {
            return res.status(500).send('Error on the server.');
        }
        if (adminResults.length > 0) {
            return handleLogin(adminResults[0], 'admin');
        } else {
            anwesenheitDB.query("SELECT * FROM lehrer WHERE Username = ?", [username], (error, teacherResults) => {
                if (error) {
                    return res.status(500).send('Error on the server.');
                }
                if (teacherResults.length > 0) {
                    return handleLogin(teacherResults[0], 'teacher');
                } else {
                    anwesenheitDB.query("SELECT * FROM schueler WHERE Nachname = ?", [username], (error, studentResults) => {
                        if (error) {
                            return res.status(500).send('Error on the server.');
                        }
                        if (studentResults.length > 0) {
                            return handleLogin(studentResults[0], 'student');
                        } else {
                            return res.status(401).send({ auth: false, message: "Invalid credentials" });
                        }
                    });
                }
            });
        }
    });
};

module.exports = { registerUser, loginUser };