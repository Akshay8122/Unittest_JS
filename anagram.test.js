const isAnagram = require("./anagram");

test("isAnagram functions exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test(' "cinema is anagram of "iceman"', () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test(' "Dormitory" is an anagram of "dirty room##"', () => {
  expect(isAnagram("Dormitory", "dirty room#")).toBeTruthy();
});

test(' "Hello" is an anagram of "Aloha"', () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
