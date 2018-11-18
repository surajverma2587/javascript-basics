const { fetchDataAndGenerateResultAsync } = require('./async-await');

describe('callbackApiRequest', () => {
  test('should return the expected string', async () => {
    const actual = await fetchDataAndGenerateResultAsync('https://jsonplaceholder.typicode.com/users?id=1')
    expect(actual).toEqual('Leanne Graham is from Gwenborough working for Romaguera-Crona');
  });

  test('should return the expected error string when id is invalid', async () => {
    const actual = await fetchDataAndGenerateResultAsync('https://jsonplaceholder.typicode.com/users?id=invalid')
    expect(actual).toEqual('Missing data in data object');
  });
})
