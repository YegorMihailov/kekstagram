/* eslint-disable no-console */
const fullPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const commentCount = document.querySelector('.social__comment-count');

const createComment = ({avatar, message, name}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');
  comment.innerHTML = '<img class="social__picture" src="=" alt="=" width="35" height="35"><p class="social__text"></p>';

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  const commentsList = document.querySelector('.social__comments');
  const commentsFragment = document.createDocumentFragment();
  commentsList.innerHTML = '';

  comments.forEach((comment) => {
    const commentElement = createComment(comment);
    commentsFragment.append(commentElement);
  });

  commentsList.append(commentsFragment);
};

const createFullPicture = ({url, likes, description}) => {
  fullPicture.querySelector('.big-picture__img img').src = url;
  fullPicture.querySelector('.big-picture__img img').alt = description;
  fullPicture.querySelector('.likes-count').textContent = likes;
  fullPicture.querySelector('.social__caption').textContent = description;
};

const hideFullImage = () => {
  fullPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    hideFullImage();
  }
}

const onCancelButtonClick = () => {
  hideFullImage();
};

const renderFullImage = (data) => {
  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCount.classList.add('hidden');

  createFullPicture(data);
  renderComments(data.comments);

  document.addEventListener('keydown', onEscKeyDown);
  cancelButton.addEventListener('click', onCancelButtonClick);
};

export { renderFullImage };
