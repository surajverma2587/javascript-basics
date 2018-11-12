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

/*
 * This is the callback function which checks if a given number is greater than 50.
 * Returns true/false.
*/

const checkIfNumberIsBig = number => number > 50;

/*
 * For every number in the numbers array the callback function checkIfNumberIsBig is executed.
 * When the callback returns true the iteration is broken and bigNumberIsPresent is set to true.
 * When the callback returns false the iteration proceeds to the next iteration. 
*/

const bigNumberIsPresent = (numbers) => numbers.some(checkIfNumberIsBig);

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

/*
 * This is the callback function which checks if the score is equal to 100.
 * The user object is destructured to obtain the score field using es6 syntax.
 * Returns true/false.
*/

const isWinner = ({ score }) => score === 100;

/*
 * For every user object in the users array the user object is passed to the callback function isWinner
 * When isWinner returns true the iteration is broken and winnerIsPresent is set to true.
 * When isWinner returns false the iteration proceeds to the next user object.
*/

const winnerIsPresent = users => users.some(isWinner);

module.exports = {
  bigNumberIsPresent,
  winnerIsPresent,
}