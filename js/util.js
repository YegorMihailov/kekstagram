const getRandomNumber = (a, b = 1) => {
  if (a === undefined) {
    throw new Error('Первый параметр должен быть числом');
  }

  return Math.floor(Math.random() * (Math.abs(b) - Math.abs(a) + 1) + Math.abs(a));

};

const isLengthCorrect = (str, maxLength) => {
  return str.length <= maxLength;
};

const getRandomArrayElement =  (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export {getRandomNumber, getRandomArrayElement};
