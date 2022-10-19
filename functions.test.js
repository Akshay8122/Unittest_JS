const Testdemo = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabse());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabse());

// const initDatabase = () => console.log("Database Intilized....");
// const closeDatabse = () => console.log("Database Closed....");
// const nameCheck = () => console.log("Checking Name....");

const nameCheck = () => console.log("Checking name");

describe("checking name", () => {
  beforeEach(() => nameCheck());

  test("User is AP", () => {
    const user = "AP";
    expect(user).toBe("AP");
  });
});
//Success test case
test("Add 5+5 is equal to 10", () => {
  expect(Testdemo.add(5, 5)).toBe(10);
});

//Failure test case
// test("Add 5+6 is Not euqal to 10", () => {
//   expect(Testdemo.add(5, 6)).toBe(10);
// });

//  CHECK FOR TRUTHY & FALSY VALUES
//  toBeNull matches only null
//  toBeUndefined matches only undefined
//  toBeDefined is the opposite of toBeUndefined
//  toBeTruthy matches anything that an if statement treat as true
//  toBeFalsy matches anything that an if statement treats as false

// toBeNull
test("Should be null", () => {
  expect(Testdemo.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(Testdemo.checkValue(null)).toBeFalsy();
});

// toBeTruthy
test("Should be falsy", () => {
  expect(Testdemo.createUser()).toEqual({
    firstName: "Akshay",
    lastName: "Patel",
  });
});

// Less than and greter than
test("Should be under 100", () => {
  const test1 = 20;
  const test2 = 50;
  expect(test1 + test2).toBeLessThanOrEqual(100);
});

// Regex

test("There is no I in team", () => {
  expect("teami").not.toMatch(/I/);
});

// Arrays
test("Admin should be in usernames", () => {
  usernames = ["Ram", "Chintan", "Sita"];
  expect(usernames).toContain("Ram");
});

// Promise
// test("user fetched name should be Ram Laxman", () => {
//   // expect.assertion(1);
//   Testdemo.fetchUser().then((data) => {
//     expect(data.name).toEqual("Ram Laxman");
//   });
// });

// Async await
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await Testdemo.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
