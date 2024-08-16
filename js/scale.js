/* eslint-disable no-console */
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const setScale = () => {
  scaleControlValue.value = '100%';
  let scaleNumber = parseInt(scaleControlValue.value.slice(0, -1), 10);
  scaleControlSmaller.addEventListener('click', () => {
    scaleNumber -= 25;
    if (scaleNumber >= 25 && scaleNumber <= 100) {
      let scaleValueSmaller = `img-upload__scale-${scaleNumber}`;
      let oldScaleValueSmaller = `img-upload__scale-${scaleNumber + 25}`;

      scaleControlValue.value = scaleNumber + '%';
      imagePreview.classList.remove(oldScaleValueSmaller);
      imagePreview.classList.add(scaleValueSmaller);
    } else {
      scaleNumber += 25;
    }
  });
  scaleControlBigger.addEventListener('click', () => {
    scaleNumber += 25;
    if (scaleNumber >= 25 && scaleNumber <= 100) {
      let oldScaleValueBigger = `img-upload__scale-${scaleNumber - 25}`;
      let scaleValueBigger = `img-upload__scale-${scaleNumber}`;

      scaleControlValue.value = scaleNumber + '%';
      imagePreview.classList.remove(oldScaleValueBigger);
      imagePreview.classList.add(scaleValueBigger);
    } else {
      scaleNumber -= 25;
    }
  });
};


export { setScale };
