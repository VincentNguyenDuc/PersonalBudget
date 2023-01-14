const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database/queries');



// * SET UP SERVER
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

// * ---------------------------------------GET--------------------------------------- * \\

// get all users
app.get('/api/users', db.getUsers);

// get user by id
app.get('/api/users/user', db.getUserById);

// get all categories by user_id
app.get('/api/categories/:id', db.getCategoriesById);

// * ---------------------------------------POST--------------------------------------- * \\
















app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});


