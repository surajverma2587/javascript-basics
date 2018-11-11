/*
 * someArray.map(callback_fn((each, index, array)), thisArg)
 * 
 * Callback Function Params:
 * - each: each item of the iteration in use
 * - index: the index of the current iteration (starting from 0) [optional]
 * - array: the original array the map function is being applied on [optional]
 * - thisArg: the value of this to use in the callback function [optional]
 * 
 * Return: []
 * 
 * Description:
 * Array.prototype.map is a built-in method added to the Array constructor Array.
 * It is only applicable on iterables (something that can be iterated over).
 * For each iteration a callback function is executed with the required params.
 * The callback runs for each value in the array and returns each new value in the resulting array
 * After all the iterations the final new array is returned as the output of the map.
 * Implementation of map is immutable; not mutating (changing) the original array.
*/

/* 
 * ============
 * Exercise: 01
 * ============
 * For a given array of integer items mutliply each item by 10
 * Implement a function called multiplyByTen()
*/

/* 
 * For a given array of numbers the map function will iterate over each number
 * and execute the callback function which accepts one param (current item of the array)
 * and multiply 10 to the current number and return the result
 * which is inserted in to the new array
 * and the process continues until the end of the iteration
 * where a new results array is returned
*/
const multiplyByTen = numbersArray => numbersArray.map(number => number * 10);

/* 
 * ============
 * Exercise: 02
 * ============
 * For a given object array of customers objects
 * implement a function called profileTitleArrayConstructor()
 * which returns an string array where each string item
 * is a concatenation of the first name, last name, age, location
 * Expected string should look like: John Smith (24) - Manchester, UK
 * 
 * Customer object array structure:
 * {
 *    firstName,
 *    lastName,
 *    age,
 *    location: {
 *      city,
 *      country
 *    },
 *    gender
 * }
*/

/*
 * For a given array of customer objects the map function will iterate over each customer
 * destructure the fields required (firstName, lastName, age) from the customer object
 * and destructure the fields required (city, country) from the customer.location object
 * which are then used to construct the required string using string templates
*/
const profileTitleArrayConstructor = customers => customers.map(customer => {
  /* 
   * Destructure the customer object to return firstName, lastName, and age fields
   * This is the es6 syntax which is the same as:
   * const firstName = customer.firstName;
   * const lastName = customer.lastName;
   * const age = customer.age;
   * NOTE: the const names should be the same as the object field names.
   * NOTE: if you require a different name then you can alias the const as follows:
   * const { firstName: first, lastName: last, age } = customer;
   * which is equivalent to
   * const first = customer.firstName;
   * const last = customer.lastName;
   * const age = customer.age;
  */
  const { firstName, lastName, age } = customer;

  /* 
   * Destructure the nested customer.location object to return city and country fields
   * This is the es6 syntax which is the same as:
   * const city = customer.location.city;
   * const country = customer.location.country;
  */
  const { city, country } = customer.location;

  /*
   * String template to construct the required string
   * The syntax requires you to use back ticks ``
   * and when you want to use a const in the string
   * you wrap the const inside ${something}
   * This is the es6 syntax which is the same as:
   * firstName + ' ' + lastName + ' (' + age + ') - ' + city + ', ' + country 
   * 
  */
  return `${firstName} ${lastName} (${age}) - ${city}, ${country}`;
});

module.exports = {
  multiplyByTen,
  profileTitleArrayConstructor,
};