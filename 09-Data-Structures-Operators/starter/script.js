'use strict';

// destructuring objects

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// Classico Italiano
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// }
// [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

// const { menu = [], openingHours: hours = [] } = restaurant;
// console.log(menu, hours);

// let a = 1;
// let b = 2;
// const obj = { a: 3, b: 4 };

// ({ a, b } = obj);
// console.log(a, b);

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const restaurant = {
//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(starterIndex, mainIndex, time, address);
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// spread operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // [ 1, 2, 7, 8, 9 ]

// const goodNewArr = [...arr];
// console.log(1, 2, goodNewArr);

// const restaurant = {
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

const menu = [...restaurant.mainMenu, 'Burguer'];
// console.log(menu); // [ 'Pizza', 'Pasta', 'Risotto', 'Burguer' ]

const name = 'August';
const letters = [...name, 'o'];
// console.log(letters);

const newRestaurant = { ...restaurant, founder: 'Ana' };
// console.log(newRestaurant);

// spread, right side of =
const arrSpread = [1, 2, ...[4, 5]];
// console.log(arrSpread); // [ 1, 2, 4, 5 ]

const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// console.log(pizza, risotto, otherFood); // Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays) // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

const add = function (...numbers) {
  console.log(numbers);
};

add(1, 2); // [ 1, 2 ]
add(3, 4, 5, 6); // [ 3, 4, 5, 6 ]
