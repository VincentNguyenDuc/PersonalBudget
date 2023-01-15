const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./database/queries');



// * SET UP SERVER
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// * ---------------------------------------GET--------------------------------------- * \\

// get all users
app.get('/api/users', db.getUsers);

// get user by id
app.get('/api/users/user', db.getUserById);

// get all categories by user_id
app.get('/api/categories/:id', db.getCategoriesById);

// * ---------------------------------------POST--------------------------------------- * \\

// create a new user and an envelope corresponding to the user id
app.post('/api/users/new', db.postNewUser);

// * ---------------------------------------PUT---------------------------------------- * \\

// Update user information based on id
app.put('/api/users/info/:id', db.updateUser);

// Update user envelope based on id
// app.put('/api/envelope/:id');
// * -------------------------------------DELETE--------------------------------------- * \\




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});


