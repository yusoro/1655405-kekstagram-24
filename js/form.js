import { isEscapeKey } from './util.js';

const IMG_UPLOAD_FILE = document.querySelector('#upload-file');
const IMG_UPLOAD_OVERLAY = document.querySelector('.img-upload__overlay');
const BODY = document.querySelector('body');
const CLOSE_BUTTON = document.querySelector('.img-upload__cancel');
const DESCRIPTION = document.querySelector('.text__description');
const HASHTAG = document.querySelector('.text__hashtags');
const HASHTAG_PATTERN = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
let hashtagArray = [];

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

DESCRIPTION.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
HASHTAG.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const makeArray = () => {
  hashtagArray = HASHTAG.value.split(' ');
};

HASHTAG.addEventListener('input', () => {
  makeArray();

  if (hashtagArray.length > 5) {
    HASHTAG.setCustomValidity('Хеш-тэгов не должно быть больше 5');
  } else {
    HASHTAG.setCustomValidity('');
  }
  HASHTAG.reportValidity();

  for (let i = 0; i <= hashtagArray.length - 2; i++) {
    const hashtagValue = hashtagArray[i];
    for (let j = i + 1; j <= hashtagArray.length - 1; j++) {
      if (hashtagArray[j] === hashtagValue) {
        HASHTAG.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
      } else {
        HASHTAG.setCustomValidity('');
      }
      HASHTAG.reportValidity();
    }
  }

  hashtagArray.forEach((value) => {
    if (value.length > 20) {
      HASHTAG.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
    } else if (!HASHTAG_PATTERN.test(value)) {
      HASHTAG.setCustomValidity('Хэш-тег не соответствует шаблону');
    } else if (value === '') {
      HASHTAG.setCustomValidity('');
    } else {
      HASHTAG.setCustomValidity('');
    }
    HASHTAG.reportValidity();
  });

});

export {uploadFormOpen, uploadFormClose};
