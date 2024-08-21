/* eslint-disable no-console */
const slider = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');
const sliderForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'fobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

// slider.classList.add('hidden');


noUiSlider.create(slider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',

});

slider.classList.add('hidden');

const updateSlider = (effect) => {
  slider.classList.remove('hidden');
  imagePreview.className = '';
  slider.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max,
    },
    start: effect.max,
    step: effect.step
  });

  if (chosenEffect === DEFAULT_EFFECT) {
    slider.classList.add('hidden');
    imagePreview.style.filter = 'none';
    imagePreview.className = '';
    sliderValue.value = '';
  } else {
    imagePreview.classList.add(`effects__preview--${chosenEffect.name}`);
  }
};

const onFormChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    chosenEffect = EFFECTS.find((effect) => evt.target.value === effect.name);
    updateSlider(chosenEffect);
  }
};

const onSliderUpdate = () => {
  sliderValue.value = slider.noUiSlider.get();
  imagePreview.style.filter = `${chosenEffect.style}(${slider.noUiSlider.get()}${chosenEffect.unit})`;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider(chosenEffect);
};

sliderForm.addEventListener('change', onFormChange);

slider.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
