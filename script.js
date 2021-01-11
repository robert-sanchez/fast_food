const fastFoodRec = {
    restaurant: ['McDonalds', 'Taco Bell', 'Burger King', 'Jack in the Box'],
    qualities: ['great food', 'awesome service', 'low prices', 'healthy options'],
    ordering: ['order now', 'get it tomorrow', 'pickup in an hour', 'get it delivered']
}

let foodMessege = [];

function generateRandomIndex(num) {
    return Math.floor(Math.random() * num);
}

for (let keys in fastFoodRec) {
}