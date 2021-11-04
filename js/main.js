import {request} from './api.js';
import {addPictures} from './pictures.js';
import './form.js';
import {uploadFormOpen, minimizePhoto, maximizePhoto, applyEffect, setUploadFormSubmit} from './form.js';
import './fullphoto.js';
import { getDataAlert } from './util.js';

let pictures = [];

setUploadFormSubmit();
uploadFormOpen();
minimizePhoto();
maximizePhoto();
applyEffect();

const onSuccess = (data) => {
  pictures = data.slice();
  addPictures(pictures);
};

const onError = () => {
  getDataAlert();
};

request(onSuccess, onError, 'GET');
