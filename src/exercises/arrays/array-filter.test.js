const arrayFilter = require('./array-filter');

describe('filterByString', () => {
  test('should return the expected filtered array by filter string', () => {
    const mockIds = ['A1', 'A2', 'B4', 'A6', 'A2']
    const actual = arrayFilter.filterByString(mockIds, 'A2');
    const expected = ['A2', 'A2'];

    expect(actual).toEqual(expected);
  });
});

describe('filterByKeyValue', () => {
  test('should return the expected filtered array by filter string', () => {
    const mockUsers = [
      {
        fullName: 'John Smith',
        age: 30,
        gender: 'male',
        email: 'j.smith@gmail.com',
        company: 'Facebook',
        city: 'London',
      },
      {
        fullName: 'Jessie Green',
        age: 23,
        gender: 'female',
        email: 'j.green@gmail.com',
        company: 'BBC',
        city: 'Manchester',
      },
      {
        fullName: 'Tom Clancy',
        age: 45,
        gender: 'male',
        email: 't.clancy@gmail.com',
        company: 'Apple',
        city: 'Manchester',
      },
      {
        fullName: 'Luke Mason',
        age: 31,
        gender: 'male',
        email: 'j.mason@gmail.com',
        company: 'Facebook',
        city: 'London',
      },
    ];
    const actual = arrayFilter.filterByKeyValue(mockUsers, 'company', 'Facebook');
    const expected = [
      {
        fullName: 'John Smith',
        age: 30,
        gender: 'male',
        email: 'j.smith@gmail.com',
        company: 'Facebook',
        city: 'London',
      },
      {
        fullName: 'Luke Mason',
        age: 31,
        gender: 'male',
        email: 'j.mason@gmail.com',
        company: 'Facebook',
        city: 'London',
      },
    ];

    expect(actual).toEqual(expected);
  });
});

describe('filterByAge', () => {
  test('', () => {
    const mockUsers = [
      {
        fullName: 'John Smith',
        age: 30,
        gender: 'male',
        email: 'j.smith@gmail.com',
        company: 'Facebook',
        city: 'London',
      },
      {
        fullName: 'Jessie Green',
        age: 23,
        gender: 'female',
        email: 'j.green@gmail.com',
        company: 'BBC',
        city: 'Manchester',
      },
      {
        fullName: 'Tom Clancy',
        age: 45,
        gender: 'male',
        email: 't.clancy@gmail.com',
        company: 'Apple',
        city: 'Manchester',
      },
      {
        fullName: 'Luke Mason',
        age: 31,
        gender: 'male',
        email: 'j.mason@gmail.com',
        company: 'Facebook',
        city: 'London',
      },
    ];
    const actual = arrayFilter.filterByAge(mockUsers, 25);
    const expected = [
      {
        fullName: 'Jessie Green',
        age: 23,
        gender: 'female',
        email: 'j.green@gmail.com',
        company: 'BBC',
        city: 'Manchester',
      },
    ];

    expect(actual).toEqual(expected);
  });
});
