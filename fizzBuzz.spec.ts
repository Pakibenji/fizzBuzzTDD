import fizzBuzz from "./fizzBuzz";

test("should return 1", () => {
  expect(fizzBuzz(1, 1)).toBe("1");
});
test("should return 2", () => {
  expect(fizzBuzz(2, 2)).toBe("2");
});
test("should return fizz", () => {
  expect(fizzBuzz(3, 3)).toBe("fizz");
});
test("should return fizz", () => {
  expect(fizzBuzz(5, 5)).toBe("buzz");
});
test("should return fizz", () => {
  expect(fizzBuzz(6, 6)).toBe("fizz");
});
test("should return fizzBuzz", () => {
  expect(fizzBuzz(15, 15)).toBe("fizzBuzz");
});
test("should return fizzBuzz", () => {
  expect(fizzBuzz(30, 30)).toBe("fizzBuzz");
});
test("should return 12", () => {
  expect(fizzBuzz(1, 2)).toBe("12");
});
test("should return 12fizz", () => {
  expect(fizzBuzz(1, 3)).toBe("12fizz");
});
test("should return 12fizz4buzzfizz78fizzbuzz11fizz1314fizzBuzz", () => {
  expect(fizzBuzz(1, 15)).toBe("12fizz4buzzfizz78fizzbuzz11fizz1314fizzBuzz");
});
test("should return 12fizz4buzzfizz78fizzbuzz11fizz1314fizzBuzz", () => {
  expect(fizzBuzz(1, 30)).toBe("12fizz4buzzfizz78fizzbuzz11fizz1314fizzBuzz1617fizz19buzzfizz2223fizzbuzz26fizz2829fizzBuzz");
});


