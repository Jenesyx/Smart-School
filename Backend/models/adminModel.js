const anwesenheitDB = require('../database/anwesenheitDB');

const AdminModel = {
    createAdmin: (username, hashedPassword) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO admin (username, hashed_password) VALUES (?, ?)';
            anwesenheitDB.query(query, [username, hashedPassword], (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });
    },

    findAdminByUsername: (username) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM admin WHERE username = ? LIMIT 1';
            anwesenheitDB.query(query, [username], (error, results, fields) => {
                if (error) {
                    return reject(error);
                }
                resolve(results[0]); 
            });
        });
    },

};

module.exports = AdminModel;
