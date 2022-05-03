const calc = require('./calculator');

describe('calculator', () => {
  test('addition', () =>{
    expect(calc.add(2,2)).toBe(4)
  })

  test('subtraction', () => {
    expect(calc.subtract(2,1)).toBe(1)
  })

  test('multiplication', () => {
    expect(calc.multiply(2,2)).toBe(4)
  })

  test('division', () => {
    expect(calc.divide(2,2)).toBe(1)
  })
})