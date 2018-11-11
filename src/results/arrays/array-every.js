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

/*
 * For every number in the numbersArray the condition in the callback function is applied
 * and if the condition for any number returns false then the iteration is broken
 * and false is returned from the every function applied on the array
 * and if the condition is truthy for all numbers then the true is returned
*/

const numbersAreEven = numbersArray => numbersArray.every(number => number % 2 === 0);

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

/*
 * For a given array of user objects the every function iterates over each user
 * to determin if the user.age is greater than or equal to the minimumAge param.
 * If the condition fails the iteration is broken and the function returns false.
 * If the condition passed the iteration moves on to the next item.
 * When all the iterations return true then the every function returns true.
 * NOTE: The params for the callback function is ({ age }) which is the destructured
 * user object to obtain the age field. This is the same as (user.age)
*/

const usersAgeAboveMinimumAge = (usersArray, minimumAge) => usersArray.every(({ age }) => age >= minimumAge);

module.exports = {
  numbersAreEven,
  usersAgeAboveMinimumAge,
};