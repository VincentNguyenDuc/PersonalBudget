// * IMPORT 

const express = require("express");
const Joi = require('Joi');


const app = express();


// * SET UP SERVER
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));



// * GET
app.get('localhost:3000/', (req, res) => {
    res.send("Hello World");
});
// * POST

// * PUT

// * DELETE


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});
