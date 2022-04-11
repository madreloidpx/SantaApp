describe("Verify Age", () => {
    //Passing Tests
    test("age is less than 10", () => {});
    test("age is less than 10 but will be in current year", () => {});
    //Failing Tests
    test("age is exactly 10", () => {});
    test("age is 10 earlier in current date", () => {});
    test("age is largely greater than 10 but still int", () => {});
    test("age is negative", () => {});
    test("birthdate is not a date", () => {});
    test("birthdate is missing", () => {});
})

describe("Verify Address", () => {
    //Passing Tests
    test("Address is a non-empty string", () => {});
    //Failing Tests
    test("Address is an empty string", () => {});
    test("Address is undefined", () => {});
});

describe("Verify Account", () => {
    //Passing Tests
    test("Account exists and has a profile", () => {});
    //Failing Tests
    test("Account exists but does not have a profile", () => {});
    test("Account does not exist", () => {});
});