/*
 * someArray.some(callback_fn((each, index, array)), thisArg)
 * 
 * Callback Function Params:
 * - each: current item of the iteration
 * - index: the index of the current iteration (starting from 0) [optional]
 * - array: the original array the some function is being applied on [optional]
 * - thisArg: the value of this to use in the callback function [optional]
 * 
 * Return: Array
 * 
 * Description:
 * Array.prototype.some is a built-in method added to the Array constructor.
 * It is only applicable on iterables (something that can be iterated over).
 * For each iteration a callback function is executed with the required params.
 * The callback runs for each element in the array and returns true/false.
 * When the callback returns true the iteration is broken and true is returned as the output.
 * When the callback returns false the iteration moves on to the next item in the array.
 * This method is used to test if atleast one element passes the condition in the callback function.
*/

/*
 * ============
 * Exercise: 01
 * ============
 * For a given array of integer items check if the array contains a number bigger than 50
 * Implement a function called bigNumberIsPresent()
*/

const bigNumberIsPresent = (/* insert your params here */) => {
  /* insert your code here */
};

/*
 * ============
 * Exercise: 02
 * ============
 * For a given array of user objects determine if there
 * is a user with a winning score of 100
 * Implement a function called winnerIsPresent()
 *
 * User object structure:
 * {
 *    fullName,
 *    age,
 *    gender,
 *    score,
 * }
 * 
*/

const winnerIsPresent = (/* insert params here */) => {
  /* insert code here */
};

module.exports = {
  bigNumberIsPresent,
  winnerIsPresent,
};