const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
    expect(isRightTriangle(3, 5, 4)).toBe(true);
    expect(isRightTriangle(4, 3, 5)).toBe(true);
    expect(isRightTriangle(4, 5, 3)).toBe(true);
    expect(isRightTriangle(5, 4, 3)).toBe(true);
    expect(isRightTriangle(5, 3, 4)).toBe(true);
});

test('0, 4, 5 is not triangle', () => {
    expect(isRightTriangle(0, 4, 5)).toBe(false);
});

test('5, 5, 5 is not triangle', () => {
    expect(isRightTriangle(5, 5, 5)).toBe(false);
});

test('4, 2, 1 is not triangle', () => {
    expect(isRightTriangle(4, 2, 1)).toBe(false);
});

test('-4, 2, 1 is not triangle', () => {
    expect(isRightTriangle(-4, 2, 1)).toBe(false);
});

test('A, 2, 1 is not triangle', () => {
    expect(isRightTriangle('A', 2, 1)).toBe(false);
});

test('100, 2, 1 is not triangle', () => {
    expect(isRightTriangle('100', 2, 1)).toBe(false);
});

test('6.5, 4, 5 is not triangle', () => {
    expect(isRightTriangle(6.5, 4, 5)).toBe(false);
});