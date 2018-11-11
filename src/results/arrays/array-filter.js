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

/*
 * Fos a given array of string items the filter function will iterate over each string
 * and return the string if the condition in the callback function is true
 * which is if the current string is equal to the filterItem.
 * The filter function always returns a true/false
 * where if true the item is added to the resulting array
 * and if false the item is not added to the resulting array.
*/

const filterByString = (itemsArray, filterItem) => itemsArray.filter(item => item === filterItem);

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

/*
 * For a given array of user objects the filter function will iterate over each user
 * and retreive the corresponding field from the user object which is filterKey.
 * Since filterKey is a variable and we cannot use object.key
 * we replace it by object[key] which returns the value of the variable key.
 * The value is then compared with the value sent as a param (filterValue)
 * and if the condition is true then the user object is added to the resulting array
 * and if the condition is false then the user object is not added to the resulting array.
*/

const filterByKeyValue = (itemsArray, filterKey, filterValue) => itemsArray.filter(item => item[filterKey] === filterValue);

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

/*
 * This is a helper function which accepts the current item from the array and the ageLimit
 * and returns true/false upon the conditional logic check.
 * We could also just directly use the conditional logic in the callback function body
 * but thought it would be useful to demonstrate this functionality here
 * as some applications might have a more complex callback function body
 * and it is always good to seperate that logic in to its own function.
*/
const isBelowAge = (user, ageLimit) => user.age <= ageLimit;

/*
 * For a given array of user objects the filter function will iterate over each user
 * and pass the user object to the isBelowAge function along with the ageLimit param.
 * Since the isBelowAge function returns a true/false
 * the user object is added to the returning array if true and 
 * the user object is not added to the returning array if false.
*/
const filterByAge = (usersArray, ageLimit) => usersArray.filter(user => isBelowAge(user, ageLimit));

module.exports = {
  filterByAge,
  filterByKeyValue,
  filterByString,
};