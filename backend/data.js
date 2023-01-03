// envelopes is an object that contains objects
// each object inside envelopes is an envelope
const envelopes = [
    {
        name: 'Vincent',
        id: 16,
        salary: 5000,
        categories: {
            rent: 1000,
            groceries: 1000,
            healthcare: 200,
            energy: 300
        },
        balance: 2500
    },
    {
        name: 'Leah',
        id: 19,
        salary: 5000,
        categories: {
            rent: 1000,
            groceries: 1000,
            healthcare: 200,
            energy: 300
        },
        balance: 2500
    }
];

const usersId = [16, 19];


module.exports = {
    envelopes,
    usersId
};