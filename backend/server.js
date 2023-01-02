// * IMPORT 
// // framework
const express = require("express");
const Joi = require('Joi');

// // data
const data = require('./data');
const envelopes = data.envelopes;

// // object
const app = express();

// // helper function
const { getEnvelopeById, randomIdGenerator } = require('./utils');



// * SET UP SERVER
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));



// * GET
// // get all envelopes 
// // get envelope by user id
app.get('/api/envelopes', (req, res) => {
    if (req.query.userId !== undefined) {
        // // find user's envelope based on user id
        const id = parseInt(req.query.userId);
        const envelopeByUser = getEnvelopeById(id, envelopes);

        res.send(envelopeByUser);
    } else {
        res.send(envelopes);
    }
});

// * POST
// // create new user
app.post('/api/envelopes/new', (req, res) => {
    if (req.query.name) {
        const newUser = {
            name: req.query.name,
            id: randomIdGenerator(),
            categories: []
        };
        envelopes.push(newUser);
        res.send(newUser);
    } else {
        res.status(400).send();
    }
});

// * PUT
// // add category to user's envelope

// * DELETE


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
