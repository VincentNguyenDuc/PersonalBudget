const data = require('./data');
const usersId = data.usersId;

function getEnvelopeById(id, envelopes) {
    for (let envelope of envelopes){
        if (envelope.id === id) {
            return envelope;
        }
    }
}

function randomIdGenerator() {
    
    while (true) {
        const userId = Math.floor((Math.random() * 100) + 1);
        if (usersId.includes(userId) === false) {
            usersId.push(userId);
            return userId;
        }
    }
}



module.exports = {
    getEnvelopeById,
    randomIdGenerator
};