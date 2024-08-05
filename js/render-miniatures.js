const createMiniature = ({url, likes, comments, description}) => {
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picture = pictureTemplate.cloneNode(true);

  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.querySelector('.picture__comments').textContent = comments.length;

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
