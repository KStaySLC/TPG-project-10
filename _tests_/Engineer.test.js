const Engineer = require("../lib/Engineer");

test('set gitHub via getGithub', () => {
    const value = 'KStaySLC';
    const check = new Engineer("Foo", 1, "test@test.com", value);
    expect(check.gitHub).toBe(value);
});