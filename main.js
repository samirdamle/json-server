const faker = require("faker");
const _ = require("lodash");

module.exports = function () {

    return {
        "people": _.times(100, (n) => {
            return {
                "id": n,
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName()
            };
        }),
        "todos": [
            {
                "id": 0,
                "title": "Get milk",
                "completed": false
            },
            {
                "id": 1,
                "title": "Feed the dog",
                "completed": false
            },
            {
                "id": 2,
                "title": "Water the plants",
                "completed": false
            },
            {
                "id": 3,
                "title": "Do the laundry",
                "completed": false
            },
            {
                "id": 4,
                "title": "Wash the car",
                "completed": false
            },
            {
                "id": 5,
                "title": "Buy groceries",
                "completed": false
            },
            {
                "id": 6,
                "title": "Check mailbox",
                "completed": false
            },
            {
                "id": 7,
                "title": "Nail the frame",
                "completed": false
            },
            {
                "id": 8,
                "title": "Do art",
                "completed": false
            },
            {
                "id": 9,
                "title": "Cook dinner",
                "completed": false
            },
            {
                "id": 10,
                "title": "Pack lunch",
                "completed": false
            },
            {
                "id": 11,
                "title": "Watch TV",
                "completed": false
            },
            {
                "id": 12,
                "title": "Book tickets",
                "completed": false
            },
            {
                "id": 13,
                "title": "Play with the dog",
                "completed": false
            }
        ]
    };
};
