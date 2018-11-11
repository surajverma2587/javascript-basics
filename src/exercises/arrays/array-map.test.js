const arrayMap  = require('./array-map');

describe('multiplyByTen', () => {
  test('should multiply each integer in an array by 10', () => {
    const actual = arrayMap.multiplyByTen([1, 2, 3, 4, 5]);
    const expected = [10, 20, 30, 40, 50]
    expect(actual).toEqual(expected);
  });  
})

describe('profileTitleArrayConstructor', () => {
  test('should return an array of expected profile title strings', () => {
    const mockCustomers = [
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 24,
        location: {
          city: 'Manchester',
          country: 'UK'
        },
        gender: 'Male'
      },
      {
        firstName: 'Sarah',
        lastName: 'Thompson',
        age: 35,
        location: {
          city: 'Essex',
          country: 'UK'
        },
        gender: 'Female'
      }
   ]
    const actual = arrayMap.profileTitleArrayConstructor(mockCustomers);
    const expected = ['John Smith (24) - Manchester, UK', 'Sarah Thompson (35) - Essex, UK'];
  
    expect(actual).toEqual(expected);
  });
});