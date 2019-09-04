let numArray = [5, 7, 11, 13, 24];

const addArray = array => {
  return array.reduce((p, i) => p + i);
};
let total = addArray(numArray);
console.log(total);

const subArray = array => {
  return array.reduce((n, i) => n - i);
};
let numTotal = subArray(numArray);
console.log(numTotal);

module.exports = {
  addArray: addArray,
  subArray: subArray
};
