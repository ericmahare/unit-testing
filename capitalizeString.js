const capitalize = (string) => {
  return string[0].toUpperCase() + string.substring(1)
}
console.log(capitalize('one'))
module.exports = capitalize;