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
app.get('/api/users/:id', db.getUserById);

// get envelope by user_id
app.get('/api/envelope/:id', db.getEnvelopeById);

// * ---------------------------------------POST--------------------------------------- * \\

// create a new user and an envelope corresponding to the user id
app.post('/api/users/new', db.postNewUser);

// * ---------------------------------------PUT---------------------------------------- * \\

// Update user information based on id
app.put('/api/users/update/:id', db.updateUser);

// Update user envelope based on id
app.put('/api/envelope/update/:id', db.updateEnvelope);

// * -------------------------------------DELETE--------------------------------------- * \\

// Delete user
app.delete('/api/users/delete/:id', db.deleteUser);



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});


