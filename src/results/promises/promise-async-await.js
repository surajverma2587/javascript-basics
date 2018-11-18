const axios = require('axios');

/*
 * axios is a Promise-based library which allows HTTP request/responses
 * The get function from axios allows a GET operation for a given URL
 * The data object is returned in the response which is destructured
 * and the first item from the data list is returned
 * If there is an error it is caught in the catch block
 * The then block is used to execute the next function
 * after the previous function is successfully resolved.
 * The fetchDataPromisified function returns a Promise
 * which fetches data for a given URL.
*/
const fetchDataPromisified = url => axios.get(url)
  .then(({ data }) => data[0])
  .catch(err => err);

/*
 * This function is mainly resposible for receiving the data object
 * and destructuring the required fields such as name, address, and company
 * to construct the required string using es6 string templating
*/
const formatResultString = ({ name = '', address = '', company = '' }) => `${name} is from ${address.city || ''} working for ${company.name || ''}`;

/**
 * This function is responsible for executing the various steps involved
 * which is to fetch the data by URL by using fetchDataPromisified
 * and once the data is made available the formatResultString function
 * is used to format the string and the resulting string is returned
 * We use the async await here to give us the sense of synchronous code
 * (in terms of steps that are easy to read)
 * We also wrap this logic in a try catch block to assure that
 * if any of the steps in the block fails we catch the error
 * and only return the expected result if all is successsful.
 * The async await is used here to wait for the fetchDataPromisified
 * to be resolved to the expected data object and then the data object
 * is passed to the fetchDataAndGenerateResult function which returns
 * the expected result as a string
 */
const fetchDataAndGenerateResult = async (url) => {
  try {
    const data = await fetchDataPromisified(url);
    const resultingString = formatResultString(data);
    return resultingString;
  } catch (err) {
    return 'No resulting string.'
  }
}

module.exports = {
  fetchDataAndGenerateResult,
}