const arrayEvery = require('./array-every');

describe('numbersAreEven', () => {
  test('should return false if any number is odd', () => {
    const mockArray = [2, 56, 42, 70, 51];
    const actual = arrayEvery.numbersAreEven(mockArray);

    expect(actual).toBe(false);
  });

  test('should return true if all numbers are even', () => {
    const mockArray = [2, 56, 42, 70, 54];
    const actual = arrayEvery.numbersAreEven(mockArray);

    expect(actual).toBe(true);
  });
});

describe('usersAgeAboveMinimumAge', () => {
  test('should return false if user age is below minimum age', () => {
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
    const actual = arrayEvery.usersAgeAboveMinimumAge(mockUsers, 25);

    expect(actual).toBe(false);
  });

  test('should return true if all users age is above minimum age', () => {
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
    const actual = arrayEvery.usersAgeAboveMinimumAge(mockUsers, 18);

    expect(actual).toBe(true);
  });
});