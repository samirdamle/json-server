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
        })
    };
};
