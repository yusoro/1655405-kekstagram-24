import {addPictures} from './pictures.js';
import './form.js';
import {uploadFormOpen, minimizePhoto, maximizePhoto, applyEffect, setUploadFormSubmit} from './form.js';
import './fullphoto.js';
import {getData} from './api.js';

setUploadFormSubmit();
uploadFormOpen();
minimizePhoto();
maximizePhoto();
applyEffect();

getData((thumbnails) => {
  addPictures(thumbnails);
});

