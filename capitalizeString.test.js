const capitalize = require('./capitalizeString')
test("should capitalize text", () => {
  expect(capitalize('one')).toBe('One')
})