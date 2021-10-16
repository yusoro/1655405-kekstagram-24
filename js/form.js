import { isEscapeKey } from './util.js';

const IMG_UPLOAD_FILE = document.querySelector('#upload-file');
const IMG_UPLOAD_OVERLAY = document.querySelector('.img-upload__overlay');
const BODY = document.querySelector('body');
const CLOSE_BUTTON = document.querySelector('.img-upload__cancel');

const uploadFormOpen = () => {
  IMG_UPLOAD_FILE.addEventListener('change', () => {
    IMG_UPLOAD_OVERLAY.classList.remove('hidden');
    BODY.classList.add('modal-open');

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        IMG_UPLOAD_OVERLAY.classList.add('hidden');
        BODY.classList.remove('modal-open');
      }
    });
  });
};

const uploadFormClose = () => {
  CLOSE_BUTTON.addEventListener('click', () => {
    IMG_UPLOAD_OVERLAY.classList.add('hidden');
    BODY.classList.remove('modal-open');
  });

  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      IMG_UPLOAD_OVERLAY.classList.add('hidden');
      BODY.classList.remove('modal-open');
    }
  });
};


export {uploadFormOpen, uploadFormClose};
