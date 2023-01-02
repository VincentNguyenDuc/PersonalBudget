// * IMPORT 
// // framework
const express = require("express");


// // data
const data = require('./data');
const envelopes = data.envelopes;

// // object
const app = express();

// // helper function
const { getEnvelopeById, randomIdGenerator, getIndexById } = require('./utils');



// * SET UP SERVER
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));



// * ---------------------------------------GET--------------------------------------- * \\

//  get all envelopes
//  get envelope by user id
app.get('/api/envelopes', (req, res) => {
    if (req.query.id) {
        // // find user's envelope based on user id
        const envelopeByUser = getEnvelopeById(req.query.id, envelopes);

        // // handle Not Found Error
        if (!envelopeByUser) return res.status(404).send('Id Not Found!');

        // // send the result
        res.send(envelopeByUser);

    } else {
        // // No query then send all envelopes
        res.send(envelopes);
    }
});



// * ---------------------------------------POST--------------------------------------- * \\

//  add new user
app.post('/api/envelopes/users', (req, res) => {
    const nameQuery = req.query.name;
    if (nameQuery) {

        // // Create new user object
        const newUser = {
            name: nameQuery,
            id: randomIdGenerator(),
            categories: {}
        };
        // // Push new user to envelopes list
        envelopes.push(newUser);

        // // response
        res.send(newUser);

    } else {
        // // Handle bad request
        res.status(400).send();
    }
});

//  add/update categories to user's envelope
app.post('/api/envelopes/categories', (req, res) => {
    // // Get queries
    const id = req.query.id;
    const category = req.query.category;
    const amount = parseFloat(req.query.amount);

    // // check if there are queries
    if (id && category && amount) {

        // // find the envelope using id
        const envelope = getEnvelopeById(id, envelopes);
        if (!envelope) return res.status(404).send("Id Not Found");

        // // create new category object
        const newCategory = { [category] : amount};

        // // assign the new category to categories object of the envelope
        envelope.categories = Object.assign(envelope.categories, newCategory);

        res.send(envelope);

    } else {
        res.status(400).send();
    }
});

// * ---------------------------------------PUT--------------------------------------- * \\

// update user's name
app.put('/api/envelopes/users', (req, res) => {
    // // get the queries: id & newName
    const id = req.query.id;
    const newName = req.query.name;
    if (id && newName) {
        // // look up envelop using id
        const envelope = getEnvelopeById(id, envelopes);
        
        // // if not existing, return 404
        if (!envelope) return res.status(404).send('Id Not Found');

        // // if existing, update name
        envelope.name = newName;

    } else {
        // // Bad Request
        res.status(400).send();
    }

});


// * ---------------------------------------DELETE--------------------------------------- * \\

// delete user
app.delete('/api/envelopes/users', (req, res) => {
    const id = req.query.id;
    if (id) {
        const index = getIndexById(id, envelopes);
        if (!index) return res.status(404).send('Id Not Found');
        const deletedUser = envelopes.splice(index, 1);
        if (!deletedUser) return res.status(404).send('Id Not Found');
        res.send(deletedUser);
    } else {
        res.status(400).send();
    }
});

// delete category
app.delete('/api/envelopes/categories', (req, res) => {
    const id = req.query.id;
    const category = req.query.category;
    if (id && category) {
        const envelope = getEnvelopeById(id, envelopes);

        if (!envelope) return res.status(404).send('Id Not Found');

        if (Object.keys(envelope.categories).includes(category)) {
            delete envelope.categories[category];
            res.send(`ID ${id}: "${category}" category deleted`);
        } else {
            res.status(404).send('Category Not Found');
        }
        
    } else {
        res.status(400).send();
    }
});





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
