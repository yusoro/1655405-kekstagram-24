import {request} from './api.js';
import {addPictures, clearPictures} from './pictures.js';
import './form.js';
import {uploadFormOpen, minimizePhoto, maximizePhoto, applyEffect, setUploadFormSubmit} from './form.js';
import './fullphoto.js';
import { getDataAlert } from './util.js';
import { shuffleArray } from './util.js';

const filtersContainer = document.querySelector('.img-filters');
const filtersForm = filtersContainer.querySelector('.img-filters__form');

let pictures = [];

setUploadFormSubmit();
uploadFormOpen();
minimizePhoto();
maximizePhoto();
applyEffect();

filtersContainer.classList.remove('img-filters--inactive');

const sort = () => {
  filtersForm.addEventListener('click', (evt) => {
    const activeFilter = filtersForm.querySelector('.img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    activeFilter.classList.remove('img-filters__button--active');

    if (evt.target.id === 'filter-random') {
      clearPictures();
      const randomPictures = pictures.slice(0, 10);
      shuffleArray(randomPictures);
      addPictures(randomPictures);
    }
    if (evt.target.id === 'filter-discussed') {
      clearPictures();
      const discussedPictures = pictures.slice().sort((a, b) => b.comments.length - a.comments.length);
      addPictures(discussedPictures);
    }
    if (evt.target.id === 'filter-default') {
      clearPictures();
      addPictures(pictures);
    }
  });
};

const onSuccess = (data) => {
  pictures = data.slice();
  addPictures(pictures);
  sort();
};

const onError = () => {
  getDataAlert();
};

request(onSuccess, onError, 'GET');
