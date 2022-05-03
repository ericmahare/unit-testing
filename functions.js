const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  strLength: L => {
    if(L.length > 0 && L.length < 10) {
      return L.length;
    }
    return "The string should be between 1 and 10"
  },
  reverseString: string => {
    return string.split("").reverse().join("")
  }
}

module.exports = functions;