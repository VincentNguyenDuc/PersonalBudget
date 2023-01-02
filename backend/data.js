// envelopes is an object that contains objects
// each object inside envelopes is an envelope
const envelopes = [
    {
        name: 'Vincent',
        id: 16,
        categories: {
            rent: 1000,
            groceries: 1000,
            healthcare: 200,
            energy: 300
        }
    },
    {
        name: 'Leah',
        id: 19,
        categories: {
            rent: 1000,
            groceries: 1000,
            healthcare: 200,
            energy: 300
        }
    }
];

const usersId = [16, 19];


module.exports = {
    envelopes,
    usersId
};