const Manager = require("../lib/Manager")

test('set office number via getOfficeNumber()', () => {
    const value = 801123456;
    const check = new Manager("Foo", 1, "test@test.com", value);
    expect(check.officeNumber).toBe(value);
});

