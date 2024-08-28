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
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    // console.log(
    //   `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  // orderPasta(ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },

  // orderPizza(mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },
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

// const name = 'August';
// const letters = [...name, 'o'];
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

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// get element
// for (const item of menu) {
//   console.log(item); // Focaccia Bruschetta Garlic Bread Caprese Salad Pizza Pasta Risotto
// }

// get index
// for (const item of menu.entries()) {
//   console.log(item) // [ 0, 'Focaccia' ] [ 1, 'Bruschetta' ] [ 2, 'Garlic Bread' ] [ 3, 'Caprese Salad' ] [ 4, 'Pizza' ] [ 5, 'Pasta' ] [ 6, 'Risotto' ]
// }

// wo destructuring
// for (const item of menu.entries()) {
//   console.log(item[0], item[1]);
// }

// with destructuring
// for (const [index, element] of menu.entries()) {
//   console.log(index, element);
// }

//  computed property names
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
// }

// const openingHours = {
//   [days[3]]: { //
//     open: 12,
//     close: 22,
//   },
// }

// console.log(openingHours);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // [ 'Focaccia', 'Pasta' ]
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Method does not exist

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

// with
// console.log(users[0]?.name ?? 'User array empty');

// wo
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

const openingHours = {
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
};

const properties = Object.keys(openingHours);
// console.log(properties); // [ 'thu', 'fri', 'sat' ]

const values = Object.values(openingHours);
// console.log(values); // [ { open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 24 }]

const entries = Object.entries(openingHours);

// for (const [key, value] of entries) {
//   console.log(key, value); // thu { open: 12, close: 22 } fri { open: 11, close: 23 } ...
// }

// for (const [key, { open, close }] of entries) {
//   console.log(key, open, close); // thu 12 22 fri 11 23 ...
// }

const ordersSet = new Set(['pasta', 'pizza', 'pizza', 'risotto'])

// console.log(ordersSet) // Set(3) { 'pasta', 'pizza', 'risotto' }
// console.log(ordersSet.size) // 3
// console.log(ordersSet.has('bread')) // false
// console.log(ordersSet.add('garlic bread')) // Set(4) { 'pasta', 'pizza', 'risotto', 'garlic bread' }
// console.log(ordersSet.delete('pasta')) // true
// console.log(ordersSet.clear())
// console.log(ordersSet[2]) // undefined

// new arr from set
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']
const staffUnique = [...new Set(staff)]
// console.log(staffUnique) // [ 'waiter', 'chef', 'manager' ]

// const rest = new Map()
// rest.set('name', 'Classico Italiano') // set, updates map and returns it
// rest.set('1', 'Italy')

// console.log(rest.set(2, 'Portugal'))
// Map(3) {
//   'name' => 'Classico Italiano',
//   '1' => 'Italy',
//   2 => 'Portugal'
// }

const map = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);   // Map({ 1=>"uno", 2=>"dos", 3=>"tres" })

// console.log(map)
// console.log(map.set('4', 'cuatro')) // Map(4) { 1 => 'uno', 2 => 'dos', 3 => 'tres', '4' => 'cuatro' }
// console.log(map.get('1')) // Italy

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
// console.log(question);

// convert object to map
// console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
for (const [key, value] of question) {
  // if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 2;
// console.log(answer);

// option 1
// if (question.get('correct') === answer) {
//   console.log(`${question.get(true)}`);
// } else {
//   console.log(`${question.get(false)}`);
// }

// option 2
// console.log(question.get(question.get('correct') === answer))


class BankAccount {
  constructor(accountNumber, accountHolder, balance = 0) {
    this.accountNumber = accountNumber
    this.accountHolder = accountHolder
    this.balance = balance
  }

  deposit(amt) {
    this.balance = this.balance + amt
    console.log(`Deposited $${amt}. New balance $${this.balance}`)
  }

  withdraw(amt) {
    this.balance = this.balance - amt
    console.log(`Deposited: $${amt}. New balance: $${this.balance}`)
  }
}

const coltAcc = new BankAccount('123', 'Colt')
console.log(coltAcc.deposit(200))
console.log(coltAcc.balance)
console.log(coltAcc.withdraw(500))
