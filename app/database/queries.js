const { request, response } = require('express');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'personal_budget_api',
    password: 'thanhvinh1612004',
    port: 5432,
});

// get all users
const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
        if (error) {
            throw error;
        } else {
            res.status(200).send(result.rows);
        }
    });
};

// get user by id
const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(`SELECT * FROM users WHERE id = ${id}`, (error, results) => {
        if (error) {
            throw error;
        }
        else if (results.rowCount === 0) {
            res.status(404).send('ID NOT FOUND');
        }
        else {
            res.status(200).send(results.rows);
        }
    }); 

};

// get envelope by id
const getEnvelopeById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(`SELECT * FROM categories WHERE user_id = ${id}`, (error, results) => {
        if (error) {
            throw error;
        }
        else if (results.rowCount === 0) {
            res.status(404).send('ID NOT FOUND');
        } else {
            res.status(200).send(results.rows);
        }
    });
};

// post new user and also created an envelope corresponding to the user_id
const postNewUser = (req, res) => {
    const { name, salary, email, age, jobs, address } = req.body;

    pool.query('INSERT INTO users (name, salary, email, age, jobs, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [name, salary, email, age, jobs, address], (error, results) => {
        if (error) {
            throw error;
        } else {
            pool.query('INSERT INTO categories (user_id) VALUES ($1) RETURNING *', [results.rows[0].id], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    res.status(204).send('New User Added!');
                }
            });
        }
    });
};

// update user's information
const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, salary, email, age, jobs, address } = req.body;
    pool.query('UPDATE users SET name = $1, salary = $2, email = $3, age = $4, jobs = $5, address = $6 WHERE id = $7', [name, salary, email, age, jobs, address, id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.status(200).send('User data modified!');
        }
    });
};

// update envelope information base on id
const updateEnvelope = (req, res) => {
    const user_id = parseInt(req.params.id);
    const { housing, groceries, utilities, transportation, entertainment, emergencies, shopping, saving } = req.body;
    pool.query('UPDATE categories SET housing = $1, groceries = $2, utilities = $3, transportation = $4, entertainment = $5, emergencies = $6, shopping = $7, saving = $8 WHERE user_id = $9',
        [housing, groceries, utilities, transportation, entertainment, emergencies, shopping, saving, user_id],
        (error, results) => {
            if (error) {
                throw error;
            } else {
                res.status(200).send('Envelope data modified!');
            }
        });
};

// delete user
const deleteUser = (req, res) => {
    const user_id = parseInt(req.params.id);
    pool.query('DELETE FROM categories WHERE user_id = $1', [user_id], (error, results) => {
        if (error) {
            throw error;
        } else {
            pool.query('DELETE FROM users WHERE id = $1', [user_id], (error, results) => {
                if (error) {
                    throw error;
                } else {
                    pool.query("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));", (error, results) => {
                        if (error) {
                            throw error;
                        } else {
                            res.status(200).send('User deleted successfully!');
                        }
                    });
                }
            });
        }
    });
};



module.exports = {
    getUsers,
    getUserById,
    getEnvelopeById,
    postNewUser,
    updateUser,
    updateEnvelope,
    deleteUser
};
