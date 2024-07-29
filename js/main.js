/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-console */

const commentLines = [
  'Бормалёк.',
  'Вот это тачилла!',
  'Ну такое...',
  'Вот это бубсы!',
  'Да есть же!',
  'Одного дня!',
  'Всё отлично!',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.'
];

const descriptions = [
  'Пляж...',
  'Табличка Go to the beach',
  'Море и песок',
  'Машина турбодизель'
];

const names = [
  'Васька Дурак',
  'Акакий Булгурович',
  'Инокентий Лютый',
  'Борис Полбович',
  'Иван Геркулесович'
];


const getRandomNumber = (a, b = 1) => {
  if (a === undefined) {
    throw new Error('Первый параметр должен быть числом');
  }

  return Math.floor(Math.random() * (Math.abs(b) - Math.abs(a) + 1) + Math.abs(a));

};

console.log(getRandomNumber(2));

const isLengthCorrect = (str, maxLength) => {
  return str.length <= maxLength;
};

console.log(isLengthCorrect('asddf', 3));

const getRandomArrayElement =  (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

const createMessage = () => {
  return Array.from({length: getRandomNumber(1, 2)}, () =>
    getRandomArrayElement(commentLines)).join(' ');
};


const createComment = (index) => {
  return {
    id: index,
    avatar: `img/avatar-${getRandomNumber(0, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(names)
  };
};


const createPicture = (index) => {
  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(0, 6)}, (_, commentIndex) => createComment(commentIndex + 1)),
  };
};

const getPictures = () => {
  return Array.from({length: 25}, (_, pictureIndex) => createPicture(pictureIndex + 1));
};


// console.log(getRandomNumber(1, 2));
console.log(getPictures());


