/* eslint-disable no-console */
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
let scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const scaleImage = (scale) => {
  scaleControlValue.value = '100%';
  imagePreview.style.transform = `scale(${scale / 100})`;
  scaleControlValue.value = `${scale}%`;
};

const onSmallerButtonClick = () => {
  let scaleNumber = parseInt(scaleControlValue.value.slice(0, -1), 10);
  scaleNumber = scaleNumber - SCALE_STEP;

  if (scaleNumber < MIN_SCALE) {
    scaleNumber = MIN_SCALE;
  }

  scaleImage(scaleNumber);
};

const onBiggerButtonClick = () => {
  let scaleNumber = parseInt(scaleControlValue.value.slice(0, -1), 10);
  scaleNumber = scaleNumber + SCALE_STEP;

  if (scaleNumber > MAX_SCALE) {
    scaleNumber = MAX_SCALE;
  }

  scaleImage(scaleNumber);
  console.log('click bi');
};

scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
scaleControlBigger.addEventListener('click', onBiggerButtonClick);

// const setScale = () => {
//   imagePreview.className = '';
//   scaleControlValue.value = '100%';
//   imagePreview.classList.add('img-upload__scale-100');

//   scaleControlSmaller.addEventListener('click', () => {

//     if (scaleNumber >= 25 && scaleNumber <= 100) {
//       let scaleValueSmaller = `img-upload__scale-${scaleNumber}`;
//       let oldScaleValueSmaller = `img-upload__scale-${scaleNumber + 25}`;

//       scaleControlValue.value = scaleNumber + '%';
//       imagePreview.classList.remove(oldScaleValueSmaller);
//       imagePreview.classList.add(scaleValueSmaller);
//     } else {
//       scaleNumber += 25;
//     }
//   });
//   scaleControlBigger.addEventListener('click', () => {
//     scaleNumber += 25;
//     if (scaleNumber >= 25 && scaleNumber <= 100) {
//       let oldScaleValueBigger = `img-upload__scale-${scaleNumber - 25}`;
//       let scaleValueBigger = `img-upload__scale-${scaleNumber}`;

//       scaleControlValue.value = scaleNumber + '%';
//       imagePreview.classList.remove(oldScaleValueBigger);
//       imagePreview.classList.add(scaleValueBigger);
//     } else {
//       scaleNumber -= 25;
//     }
//   });
// };


export { scaleImage, scaleControlSmaller, scaleControlBigger, onSmallerButtonClick, onBiggerButtonClick };
