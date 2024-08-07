/* eslint-disable no-console */
import { renderFullImage } from './full.js';

const createMiniature = (data) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = data.url;
  picture.querySelector('.picture__img').alt = data.description;
  picture.querySelector('.picture__likes').textContent = data.likes;
  picture.querySelector('.picture__comments').textContent = data.comments.length;

  picture.addEventListener('click', () => {renderFullImage(data);});

  return picture;
};

const renderMiniatures = (pictures) => {
  const pictureList = document.querySelector('.pictures');
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = createMiniature(picture);


    pictureFragment.append(pictureElement);
  });

  pictureList.append(pictureFragment);
};

export {renderMiniatures};
