import { PHOTOS } from './description.js';

const TEMPLATE = document.querySelector('#picture').content;
const FRAGMENT = document.createDocumentFragment();
const PICTURE_TEMPLATE = TEMPLATE.querySelector('a');
const PICTURES = document.querySelector('.pictures');

const makePicture = ({url, likes, comments}) => {
  const PICTURE = PICTURE_TEMPLATE.cloneNode(true);
  PICTURE.querySelector('.picture__img').src = url;
  PICTURE.querySelector('.picture__likes').textContent = likes;
  PICTURE.querySelector('.picture__comments').textContent = comments.length;
  FRAGMENT.appendChild(PICTURE);
};

const addPictures = () => {
  PHOTOS.forEach(({url, likes, comments}) => {
    makePicture({url, likes, comments});
  });
};
addPictures();
PICTURES.appendChild(FRAGMENT);

export {PICTURES};
