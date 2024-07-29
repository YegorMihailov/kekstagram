/* eslint-disable prefer-const */
/* eslint-disable no-console */

function getRandomNumber (min, max) {
  return min > max ? console.log('Min > Max') : Math.floor(Math.random() * (max - min + 1) + min);

}

console.log(getRandomNumber(2000, 1808));

function isLengthCorrect (str, maxLength) {
  return str.length <= maxLength;
}

console.log(isLengthCorrect('asddf', 3));

