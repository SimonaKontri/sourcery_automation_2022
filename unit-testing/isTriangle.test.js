const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(3, 5, 4)).toBe(true);
    expect(isTriangle(4, 3, 5)).toBe(true);
    expect(isTriangle(4, 5, 3)).toBe(true);
    expect(isTriangle(5, 4, 3)).toBe(true);
    expect(isTriangle(5, 3, 4)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isTriangle(0, 4, 5)).toBe(false);
});

test('5, 5, 5 is triangle', () => {
    expect(isTriangle(5, 5, 5)).toBe(true);
});

test('4, 2, 1 is not triangle', () => {
    let a = 4;
    let b = 2;
    let c = 1;

    let result = isTriangle(a, b, c)
    expect(result).toBe(false);
});

test('-4, 2, 1 is not triangle', () => {
    expect(isTriangle(-4, 2, 1)).toBe(false);
});

test('A, 2, 1 is not triangle', () => {
    expect(isTriangle('A', 2, 1)).toBe(false);
});

test('100, 2, 1 is not triangle', () => {
    expect(isTriangle('100', 2, 1)).toBe(false);
});

test('6.5, 4, 5 is triangle', () => {
    expect(isTriangle(6.5, 4, 5)).toBe(true);
});