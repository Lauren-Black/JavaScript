/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const wallet = {
    name: "Lauren's Wallet",
    cash: 50,
    cards: ["debit card","credit card","scene card","starbucks card","optimum card"],
    color: "brown",

    starbucksCard1: {
        style: "generic",
        color: "white",
        amount: 20,
        used: false,

        toggleUsed: function(usedStatus) {
            this.used = usedStatus
        },
    },

    starbucksCard2: {
        style: "christmas",
        color: "multi",
        amount: 30,
        used: false,
        toggleUsed: function(usedStatus) {
            this.used = usedStatus
        },
    },
    updateCash: function(cashStatus) {
        this.cash = cashStatus
    },
}
