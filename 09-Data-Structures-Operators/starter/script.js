'use strict';

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

// destructuring objects

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

// const menu = [...restaurant.mainMenu, 'Burguer'];
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

const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// const add = function (...numbers) {
//   console.log(numbers);
// };

// add(1, 2); // [ 1, 2 ]
// add(3, 4, 5, 6); // [ 3, 4, 5, 6 ]

// const x = [23, 5, 7];
// add(...x); // [23, 5, 7]

// short circuiting (&& y ||)

// console.log(3 || 'Lola'); // 3
// console.log('' || 'Lola'); // 'Lola'
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello'

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10;
// console.log(guests2); // 10

// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // 'Jonas'

// console.log('Hello' && 23 && null && 'jonas'); // null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// Nullish: null and undefined (NOT 0 or '')

restaurant.numGuests = 0;

const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0

//  logical operators

const rest1 = { name: 'Capri', numOfGuests: 0 };

// long way
rest1.numOfGuests = rest1.numOfGuests || 10;

// short way
rest1.numOfGuests ||= 10;
rest1.numOfGuests ??= 10;
rest1.numOfGuests &&= 10;

// console.log(rest1.numOfGuests)

// looping arrays (for of)

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// get element
for (const item of menu) {
  console.log(item); // Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto
}

// get index
for (const item of menu.entries()) {
  console.log(item) // [ 0, 'Focaccia' ] [ 1, 'Bruschetta' ] [ 2, 'Garlic Bread' ] [ 3, 'Caprese Salad' ] [ 4, 'Pizza' ] [ 5, 'Pasta' ] [ 6, 'Risotto' ]
}

// wo destructuring
for (const item of menu.entries()) {
  console.log(item[0], item[1]);
}

// with destructuring
for (const [index, element] of menu.entries()) {
  console.log(index, element);
}
