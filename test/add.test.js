const add = require('../add');

test('Add two numbers', () => {
    expect(add(1, 3)).toBe(4);
});