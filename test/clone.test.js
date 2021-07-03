const clone = require('../clone');

test('Clone array', () => {
    const array = [1, 3, 4];
    expect(clone(array)).toEqual(array)
});


test('Clone array testing', () => {
    const array = [1, 3, 4];
    expect(clone(array)).not.toBe(array)
});

