const functions = require('./functions')
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2,2)).toBe(4)
})

test('should be Null', () => {
  expect(functions.isNull()).toBeNull();
})

test('should be falsy', () => {
  expect(functions.checkValue()).toBeFalsy();
})

test("should return length", () => {
  expect(functions.strLength("one"))
})

test("should return error message", () => {
  expect(functions.strLength("")).toBe("The string should be between 1 and 10")
})

test("error message", () => {
  expect(functions.strLength("dlkdlklsldksdldsk")).toBe('The string should be between 1 and 10')
})

test("return reverse", () => {
  expect(functions.reverseString("one")).toBe('eno');
})