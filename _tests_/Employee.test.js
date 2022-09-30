const Employee = require("../lib/Employee");

test('set name via getName()', () => {
    const value = 'Foo';
    const check = new Employee("Foo", 1, "test@test.com", value);
    expect(check.name).toBe(value);
});
test('set email via getEmail()', () => {
    const value = "test@test.com";
    const check = new Employee("Foo", 1, "test@test.com", value);
    expect(check.email).toBe(value);
});
test('set role via getId()', () => {
    const value = 1;
    const check = new Employee("Foo", 1, "test@test.com", value);
    expect(check.id).toBe(value);
});
test('set role via getRole()', () => {
    const value = 'Employee';
    const check = new Employee("Foo", 1, "test@test.com", value);
    expect(check.role).toBe(value);
});