////////////////////////////////
// LECTURE: Values and Variables

// 1.Declare variables called 'country', 'continent 'and 'population' and assign their values according to your own country(population in millions)
let country = 'Uruguay';
let continent = 'South America';
let population = 3.4;

// 2.Log their values to the console
console.log(country);
console.log(continent);
console.log(population);

//////////////////////
// LECTURE: Data Types

// 1.Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Booleanvalue. Also declare a variable 'language', but don't assign it any value yet
let isIsland = false;
let language;

// 2.Log the types of 'isIsland', 'population', 'country' and 'language' to the console
console.log(typeof Boolean); // function
console.log(typeof population); // number
console.log(typeof country); // string
console.log(typeof language); // undefined

//////////////////////////////
// LECTURE: let, const and var

// 1.Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one)
language = 'spanish';

// 2.Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
const country2 = 'Uruguay';
const continent2 = 'South America';
const isIsland2 = false;

// 3.Try to change one of the changed variables now, and observe what happens
// isIsland2 = true; // TypeError: Assignment to constant variable.

///////////////////////////
// LECTURE: Basic Operators

// 1.If your country split in half, and each half would contain half the population, then how many people would live in each half?
console.log(population / 2);

// 2.Increase the populationof your country by 1 and log the result to the console
population++;
console.log(population);

// 3.Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population < 6);

// 4.The average population of a country is 33 million people. Does your country have less people than the average country?
console.log(population < 33);

// 5.Based on the variables you created, create a new variable 'description 'which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;

console.log(description1);

/////////////////////////////////////////
// LECTURE: Strings and Template Literals

// 1.Recreate the 'description' variable from the last assignment, this time using the template literal syntax
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

console.log(description2);

//////////////////////////////////////////////////
// LECTURE: Taking Decisions: if / else Statements

// 1.If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
if (country > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} million below average`);
}

// 2.After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original

////////////////////////////////////////
// LECTURE: Type Conversion and Coercion

// 1.Predict the result of these 5 operations without executing them:'9' -'5';'19' -'13' + '17';'19' -'13' + 17;'123' < 57;5 + 6 + '4' + 9 -4 -2;

// 2.Execute the operations to check if you were right
