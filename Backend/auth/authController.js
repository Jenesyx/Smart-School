const AdminModel = require('../models/adminModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const anwesenheitDB = require('../database/anwesenheitDB');


const registerUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        await AdminModel.createAdmin(req.body.username, hashedPassword);
    } catch (error) {
        res.status(500).send("There was a problem registering the user.");
    }
};

const loginUser = (req, res) => {
    const { username, password } = req.body;

    // Check in 'admin' table
    anwesenheitDB.query("SELECT * FROM admin WHERE username = ? AND password = ?", [username, password], (error, adminResults) => {
        if (adminResults && adminResults.length > 0) {
            // Admin login successful
            // ... generate a token or return a success response
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.send({ auth: true, token: token });
            return res.send({ auth: true, userRole: 'admin', userId: adminResults[0].adminID });
        } else {
            // Check in 'lehrer' table
            anwesenheitDB.query("SELECT * FROM lehrer WHERE Username = ? AND Password = ?", [username, password], (error, teacherResults) => {
                if (teacherResults && teacherResults.length > 0) {
                    // Teacher login successful
                    // ... generate a token or return a success response
                    return res.send({ auth: true, userRole: 'teacher', userId: teacherResults[0].Lehrer_ID });
                } else {
                    // Check in 'schueler' table
                    anwesenheitDB.query("SELECT * FROM schueler WHERE Nachname = ? AND Password = ?", [username, password], (error, studentResults) => {
                        if (studentResults && studentResults.length > 0) {
                            // Student login successful
                            // ... generate a token or return a success response
                            return res.send({ auth: true, userRole: 'student', userId: studentResults[0].Schueler_ID });
                        } else {
                            // Login failed
                            return res.status(401).send({ auth: false, message: "Invalid credentials" });
                        }
                    });
                }
            });
        }
    });
};


module.exports = { registerUser, loginUser };