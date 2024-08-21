/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
import { scaleImage } from './scale.js';
import { resetEffects } from './effects.js';

const form = document.querySelector('.img-upload__form');
const uploadInput = document.querySelector('#upload-file');
const tagInput = document.querySelector('.text__hashtags');
const commentInput  =document.querySelector('.text__description');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const cancelButton = document.querySelector('#upload-cancel');
// const tagError = document.querySelector('.img-upload__error');
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const body = document.querySelector('body');

const pristine = new Pristine(form, {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error',
});

const isTextFieldFocused = () => {
  return (document.activeElement === tagInput || document.activeElement === commentInput);
};

const hideImageForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  cancelButton.removeEventListener('click', onCancelButtonClick);
  // tagInput.removeEventListener('change', validateForm);
  // form.removeEventListener('submit', );

  resetEffects();
  scaleImage(100);

  uploadInput.value = '';
  tagInput.value = '';
  commentInput.value = '';

  // scaleImage();
};

const renderImageForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleImage(100);

  document.addEventListener('keydown', onEscKeyDown);
  cancelButton.addEventListener('click', onCancelButtonClick);
};

const validateTags = () => {
  const tags = tagInput.value.split(' ');

  let identicaltags = false;
  // tags

  for (let i = 0; i < tags.length; i++) {
    tags[i] = tags[i].toLowerCase();
  }

  for (let i = 0; i < tags.length; i++) {
    for (let k = i + 1; k < tags.length; k++) {
      if (tags[i] === tags[k]) {
        identicaltags = true;
      }
    }
  }

  for (let i = 0; i < tags.length; i++) {
    if (!re.test(tags[i]) || tags.length > 5 || identicaltags) {
      return false;
    }

    return true;
  }
};

pristine.addValidator(tagInput, validateTags, 'Неправильно заполнены хэштэги');

// DRY !!!

function onEscKeyDown(evt) {
  if (evt.code === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    hideImageForm();
  }
}

function onCancelButtonClick () {
  hideImageForm();
}

// DRY !!!

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

uploadInput.addEventListener('change', () => {
  renderImageForm();
});

form.addEventListener('submit', onFormSubmit);

export {renderImageForm};
