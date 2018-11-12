const arraySome = require('./array-some');

describe('bigNumberIsPresent', () => {
  test('should return true if a prime number is present', () => {
    const mockNumbers = [45, 56, 73, 64, 9];
    const actual = arraySome.bigNumberIsPresent(mockNumbers);
    expect(actual).toBe(true);
  });

  test('should return false if a prime number is not present', () => {
    const mockNumbers = [45, 56, 75, 64, 9];
    const actual = arraySome.bigNumberIsPresent(mockNumbers);
    expect(actual).toBe(false);
  });
});

describe('winnerIsPresent', () => {
  test('should return true if a winner is present', () => {
    const mockUsers = [
      {
        fullName: '',
        age: 12,
        gender: 'male',
        score: 67,
      },
      {
        fullName: '',
        age: 12,
        gender: 'male',
        score: 100,
      },
      {
        fullName: '',
        age: 12,
        gender: 'male',
        score: 90,
      },
    ];
    const actual = arraySome.winnerIsPresent(mockUsers);
    expect(actual).toBe(true);
  });

  test('should return false if no winner is present', () => {
    const mockUsers = [
      {
        fullName: '',
        age: 12,
        gender: 'male',
        score: 67,
      },
      {
        fullName: '',
        age: 12,
        gender: 'male',
        score: 90,
      },
      {
        fullName: '',
        age: 12,
        gender: 'male',
        score: 90,
      },
    ];
    const actual = arraySome.winnerIsPresent(mockUsers);
    expect(actual).toBe(false);
  });
})

