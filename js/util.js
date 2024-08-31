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

const showAlert = (message, isSuccess) => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';

  if (isSuccess) {
    alertContainer.style.backgroundColor = 'green';
  } else {
    alertContainer.style.backgroundColor = 'red';
  }


  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {alertContainer.remove()}, 5000);
};

export {getRandomNumber, getRandomArrayElement, showAlert};
