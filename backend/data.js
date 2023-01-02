// envelopes is an object that contains objects
// each object inside envelopes is an envelope
const envelopes = [
    {
        name: 'Vincent',
        id: 16,
        categories: [
            {
                category: 'Rent',
                amount: 1000
            },
            {

                category: 'Groceries',
                amount: 1000
            },
            {
                category: 'Healthcare',
                amount: 200
            },
            {
                category: 'Energy',
                amount: 300
            }
        ]
    }, 
    {
        name: 'Leah',
        id:19,
        categories: [
            {
                category: 'Rent',
                amount: 1200
            },
            {

                category: 'Groceries',
                amount: 1200
            },
            {
                category: 'Healthcare',
                amount: 300
            },
            {
                category: 'Energy',
                amount: 300
            }
        ]
    }
];

const usersId = [16, 19];


module.exports = {
    envelopes,
    usersId
};