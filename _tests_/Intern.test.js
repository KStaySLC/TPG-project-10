const Intern = require("../lib/Intern");

test('set university via getSchool()', () => {
    const value = 'U of U';
    const check = new Intern("Foo", 1, "test@test.com", value);
    expect(check.school).toBe(value);
})
