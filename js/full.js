/* eslint-disable no-console */

const fullPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const commentsCount = document.querySelector('.comments-count');
const commentsCurrentCount = document.querySelector('.comments-current-count');
const commentsLoader = document.querySelector('.comments-loader');
// let commentsLessFlag = false;

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
  let commentsCounter = 0;
  let commentsCurrentCountValue = 5;
  commentsList.innerHTML = '';
  commentsCount.textContent = comments.length;

  if (comments.length <= 5) {
    commentsCurrentCount.textContent = comments.length;
    commentsCurrentCountValue = comments.length;
    commentsLessFlag = true;
    commentsLoader.classList.add('hidden');
    console.log('f', comments.length);
  } else {
    commentsCurrentCount.textContent = commentsCurrentCountValue;
    commentsLoader.classList.remove('hidden');
  }

  comments.forEach((comment) => {
    if (commentsCounter < 5) {
      const commentElement = createComment(comment);
      commentsFragment.append(commentElement);
      commentsCounter++;
    }
  });

  if (comments.length > 5) {
    comments.splice(0, 5);
  } else {
    comments.length = 0;
  }

  commentsLoader.addEventListener('click', () => {
    commentsCounter = 0;
    comments.forEach((comment) => {
      if (commentsCounter < 5) {
        const commentElement = createComment(comment);
        commentsFragment.append(commentElement);
        commentsCurrentCountValue++;
      }
      commentsCounter++;
    });

    commentsCurrentCount.textContent = commentsCurrentCountValue;

    commentsList.append(commentsFragment);

    comments.splice(0, 5);
    if (comments.length === 0) {
      commentsLoader.classList.add('hidden');
    }
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
  cancelButton.removeEventListener('click', onCancelButtonClick);
};

function onEscKeyDown(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    hideFullImage();
  }
}

function onCancelButtonClick () {
  hideFullImage();
}

const renderFullImage = (data) => {
  fullPicture.classList.remove('hidden');
  body.classList.add('modal-open');


  createFullPicture(data);
  renderComments(data.comments);
  // console.log(data.comments);

  document.addEventListener('keydown', onEscKeyDown);
  cancelButton.addEventListener('click', onCancelButtonClick);
};

export { renderFullImage };
