const sum = require('./sum');

test("testar a soma", () => {
    expect(sum(34,2)).toBe(36);
});