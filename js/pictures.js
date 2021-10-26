import { PHOTOS } from './description.js';
import {showBigPicture} from './fullphoto.js';

const template = document.querySelector('#picture').content;

const pictureTemplate  = template.querySelector('a');
const pictures = document.querySelector('.pictures');

const makePicture = (photo) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = photo.url;
  picture.querySelector('.picture__likes').textContent = photo.likes;
  picture.querySelector('.picture__comments').textContent = photo.comments.length;

  picture.addEventListener('click', () => {
    showBigPicture(photo);
  });

  return picture;
};

const addPictures = () => {
  const fragment = document.createDocumentFragment();
  PHOTOS.forEach((item) => {
    fragment.appendChild(makePicture(item));
  });
  pictures.appendChild(fragment);
};

export {addPictures};
