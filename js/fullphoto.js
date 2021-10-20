import { isEscapeKey } from './util.js';
import { PHOTOS } from './description.js';
import {addPictures} from './pictures.js';
import {pictures} from './pictures.js';
import {FRAGMENT} from './pictures.js';


addPictures();
pictures.appendChild(FRAGMENT);

const bigPicture = document.querySelector('.big-picture');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const closeBigPicture = document.querySelector('.big-picture__cancel');
const miniature = document.querySelectorAll('.picture');


for (let i = 0; i < miniature.length; i++) {

  miniature[i].addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    commentCount.classList.add('hidden');
    commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        bigPicture.classList.add('hidden');
        commentCount.classList.remove('hidden');
        commentsLoader.classList.remove('hidden');
        body.classList.remove('modal-open');
      }
    });

  });

  closeBigPicture.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    commentCount.classList.remove('hidden');
    commentsLoader.classList.remove('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        bigPicture.classList.add('hidden');
        commentCount.classList.remove('hidden');
        commentsLoader.classList.remove('hidden');
        body.classList.remove('modal-open');
      }
    });
  });

}


//export {closeFullPhoto};
