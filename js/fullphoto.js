import { isEscapeKey } from './util.js';
import { PHOTOS } from './description.js';
import {addPictures} from './pictures.js';
import {pictures} from './pictures.js';
import {FRAGMENT} from './pictures.js';
import {COMMENTS} from './comments.js';

addPictures();
pictures.appendChild(FRAGMENT);

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const miniature = document.querySelectorAll('.picture__img');
const socialComments = document.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();

const urlAddress = PHOTOS.map((address) => address.url);
const likesArray = PHOTOS.map((like) => like.likes);
const descriptionArray = PHOTOS.map((name) => name.description);
const commentsLength = PHOTOS.map((comment) => comment.comments.length);

const makeComment = ({avatar, name, message}) => {
  const commentsListItem = document.querySelector('.social__comment').cloneNode(true);

  commentsListItem.querySelector('.social__picture').src = avatar;
  commentsListItem.querySelector('.social__picture').alt = name;
  commentsListItem.querySelector('.social__text').textContent = message;

  commentFragment.append(commentsListItem);
};

const addComments = () => {
  COMMENTS.forEach(({avatar, name, message}) => {
    makeComment({avatar, name, message});
  });

  socialComments.innerHTML = '';
  socialComments.append(commentFragment);
};

const hideModal = () => {
  bigPicture.classList.add('hidden');
  commentsLoader.classList.remove('hidden');
  body.classList.remove('modal-open');
};

const closeFullPhoto = () => {
  closeBigPicture.addEventListener('click', () => {
    hideModal();

    document.removeEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        hideModal();
      }
    });
  });
};

const openFullPhoto = (thumbnail, url, likes, description, comments) => {
  thumbnail.addEventListener('click', () => {
    bigPicture.querySelector('.full-photo').src = url;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.social__caption').textContent = description;
    bigPicture.querySelector('.comments-count').textContent = comments;

    bigPicture.classList.remove('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        hideModal();
      }
    });

  });
};


for (let i = 0; i < miniature.length; i++) {
  openFullPhoto(miniature[i], urlAddress[i], likesArray[i], descriptionArray[i],
    commentsLength[i]);
  closeFullPhoto();
  addComments();
}
