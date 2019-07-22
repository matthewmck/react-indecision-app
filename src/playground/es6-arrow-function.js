// const square = function (x) {
//     return x * x;
// }

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(9));

// const getFirstName = (name) => {
//     return name.split(' ')[0];
// };

// const getFirstName = (name) => name.split(' ')[0];

// console.log(getFirstName('Matt McKee'));

// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(55, 1));

// const user = {
//     name: 'Matt',
//     cities: ['Orlando', 'Gainesvile', 'Vilseck'],
//     printPlacesLived() {
//         return this.cities.map((city) => city + '!');
//     }
// };

// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());