const axios = require('axios');

/**
 * ===========
 * Exercise 01
 * ===========
 * From the promise-async-await example convert all the functions
 * fetchDataPromisified and formatResultString to async await and
 * remove all implementations of promises
 */
const fetchDataAsync = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data[0];
  } catch (err) {
    return 'No data object'
  }
};

const formatResultStringAsync = async (data) => {
  try {
    const { name, address, company } = data;
    return `${name} is from ${address.city || ''} working for ${company.name || ''}`;
  } catch (err) {
    return 'Missing data in data object';
  }
};

const fetchDataAndGenerateResultAsync = async (url) => {
  try {
    const data = await fetchDataAsync(url);
    const resultingString = await formatResultStringAsync(data);
    return resultingString;
  } catch (err) {
    return 'No resulting string';
  }
}

module.exports = {
  fetchDataAndGenerateResultAsync,
}