const sum = require('./sum');

test("testar a soma", () => {
    expect(sum(34,2)).toBe(36);
});

const subtract = require('./subtract');

test("testar a subtração", () => {
    expect(subtract(10,10)).toBe(6);
});