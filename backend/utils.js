const data = require('./data');
const Joi = require('Joi');
const usersId = data.usersId;

function getEnvelopeById(id, envelopes) {
    return envelopes.find(envelope => envelope.id === parseInt(id));
}

function getIndexById(id, envelopes) {
    for (let i = 0; i < envelopes.length; i++) {
        if (envelopes[i].id === parseInt(id)) {
            return i;
        }
    }
}

function randomIdGenerator() {
    while (true) {
        const id = Math.floor((Math.random() * 100) + 1);
        if (usersId.includes(id) === false) {
            usersId.push(id);
            return id;
        }
    }
}

function validateUserName(userName) {
    const schema = Joi.object({ name: Joi.string().min(3).required() });

    return schema.validate(userName);
}



module.exports = {
    getEnvelopeById,
    randomIdGenerator,
    getIndexById
};