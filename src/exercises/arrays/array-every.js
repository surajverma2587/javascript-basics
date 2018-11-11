/*
 * someArray.every(callback_fn(each, index, array), thisArg)
 * 
 * Callback Function Params:
 * - each: current item of the iteration
 * - index: the index of the current iteration (starting from 0) [optional]
 * - array: the original array the every function is being applied on [optional]
 * - thisArg: the value of this to use in the callback function [optional]
 * 
 * Return: Boolean
 * 
 * Description:
 * Array.prototype.every is a built-in method added to the Array constructor.
 * It is only applicable on iterables (something that can be iterated over).
 * For each iteration a callback function is executed with the required params.
 * The callback runs for each element in the array and returns true/false.
 * When the callback returns false the iteration is broken and false is returned as the output.
 * When the callback returns true the iteration moves on to the next item in the array.
*/

/*
 * ============
 * Exercise: 01
 * ============
 * For a given array of numbers determine if all numbers are even
 * Implement a function called numbersAreEven()
*/

const numbersAreEven = (/* insert params here */) => {
  /* insert code here */
};

/*
 * ============
 * Exercise: 02
 * ============
 * For a given array of user objects determine if all users
 * are above the minimum age
 * Implement a function called usersAgeAboveMinimumAge()
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
*/

const usersAgeAboveMinimumAge = (/* insert params here */) => {
  /* insert code here */
};

module.exports = {
  numbersAreEven,
  usersAgeAboveMinimumAge,
};