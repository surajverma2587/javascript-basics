/*
 * someArray.map(callback_fn((each, index, array)), thisArg)
 * 
 * Callback Function Params:
 * - each: current item of the iteration
 * - index: the index of the current iteration (starting from 0) [optional]
 * - array: the original array the map function is being applied on [optional]
 * - thisArg: the value of this to use in the callback function [optional]
 * 
 * Return: Array
 * 
 * Description:
 * Array.prototype.map is a built-in method added to the Array constructor.
 * It is only applicable on iterables (something that can be iterated over).
 * For each iteration a callback function is executed with the required params.
 * The callback runs for each element in the array and returns each new value in the resulting array
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

const multiplyByTen = (/* insert params here */) => {
  /* insert code here */
};

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
 * Customer object structure:
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

const profileTitleArrayConstructor = (/* insert params here */) => {
  /* insert code here */
}

module.exports = {
  multiplyByTen,
  profileTitleArrayConstructor,
};