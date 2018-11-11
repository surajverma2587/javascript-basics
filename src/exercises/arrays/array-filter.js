/*
 * someArray.filter(callback_fn(each, index, array), thisArg)
 * 
 * Callback Function Params:
 * - each: current item of the iteration
 * - index: the index of the current iteration (starting from 0) [optional]
 * - array: the original array the filter function is being applied on [optional]
 * - thisArg: the value of this to use in the callback function [optional]
 * 
 * Return: Array
 * 
 * Description:
 * Array.prototype.filter is a built-in method added to the Array constructor.
 * It is only applicable on iterables (something that can be iterated over).
 * For each iteration a callback function is executed with the required params.
 * The callback runs for each element in the array
 * and returns the element to the resulting array if it meets the condition specified.
 * After all the iterations the final new array is returned as the output of the filter.
 * Implementation of filter is immutable; not mutating (changing) the original array.
*/

/*
 * ============
 * Exercise: 01
 * ============
 * For a given array of string items filter a specific string
 * Implement a function called filterByString()
*/

const filterByString = (/* insert params here */) => {
  /* insert code here */
};

/*
 * ============
 * Exercise: 02
 * ============
 * For a given array of user objects filter a specific object
 * where the key and value pair matches
 * Implement a function called filterByKeyValue()
 * 
 * User object structure:
 * {
 *    fullName,
 *    age,
 *    gender,
 *    email,
 *    company,
 *    city,
 * } 
 * 
 * For example filter the array to return a list of users working for a specific company
*/

const filterByKeyValue = (/* insert params here */) => {
  /* insert code here */
};

/*
 * ============
 * Exercise: 03
 * ============
 * For a given array of user objects filter a specific object
 * where the user age is less than or equal to a given age
 * Implement a function called filterByAge()
 * 
 * User object structure:
 * {
 *    fullName,
 *    age,
 *    gender,
 *    email,
 *    company,
 *    city,
 * } 
*/

const filterByAge = (/* insert params here */) => {
  /* insert code here */
};

module.exports = {
  filterByAge,
  filterByKeyValue,
  filterByString,
};