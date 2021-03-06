/**
 * getRandomElement should return a random element from the array passed in
 * @param arr
 * @returns {*}
 */

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
  getRandomElement,
};
