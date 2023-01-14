const { request } = require('express');

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
    if (req.query.id) {
        const id = parseInt(req.query.id);
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
    } else {
        res.status(400).send();
    }
};

// get categories by id
const getCategoriesById = (req, res) => {
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



module.exports = {
    getUsers,
    getUserById,
    getCategoriesById
};
