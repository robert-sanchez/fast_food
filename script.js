const fastFoodRec = {
    restaurant: ['McDonalds', 'Taco Bell', 'Burger King', 'Jack in the Box'],
    qualities: ['great food', 'awesome service', 'low prices', 'healthy options'],
    ordering: ['order it now', 'get it tomorrow', 'pickup in an hour', 'get it delivered']
}

let foodMessage = [];
// function to generate random index for selecting element in array
function generateRandomIndex(num) {
    return Math.floor(Math.random() * num);
}

for (let keys in fastFoodRec) {
    let randomSelection = generateRandomIndex(fastFoodRec[keys].length);
    // console.log(randomSelection);
    switch (keys) {
        case 'restaurant':
            foodMessage.push(`You should order ${fastFoodRec[keys][randomSelection]}.`);
            break;
        case 'qualities':
            foodMessage.push(`They have ${fastFoodRec[keys][randomSelection]}.`);
            break;
        case 'ordering':
            foodMessage.push(`You should ${fastFoodRec[keys][randomSelection]}.`);
            break;
    }
}

function fullMessage(arr) {
    console.log(arr.join(' '));
}

fullMessage(foodMessage);