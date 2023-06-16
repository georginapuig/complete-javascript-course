'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

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

const restaurant = {
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, time, address);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
