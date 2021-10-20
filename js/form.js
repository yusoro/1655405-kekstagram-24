import { isEscapeKey } from './util.js';

const imgUploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeButton = document.querySelector('.img-upload__cancel');
const description = document.querySelector('.text__description');
const hashtag = document.querySelector('.text__hashtags');
const HASHTAG_PATTERN = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const HASHTAG_QUANTITY = 5;
const HASHTAG_LENGTH = 20;
const DECREASE_ARRAY_LENGTH = 2;
let hashtagArray = [];


const uploadFormOpen = () => {
  imgUploadFile.addEventListener('change', () => {
    imgUploadOverlay.classList.remove('hidden');
    body.classList.add('modal-open');

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        imgUploadOverlay.classList.add('hidden');
        body.classList.remove('modal-open');
      }
    });
  });
};

const uploadFormClose = () => {
  closeButton.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  document.removeEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      imgUploadOverlay.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};

description.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
hashtag.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

const makeArray = () => {
  hashtagArray = hashtag.value.split(/\s+/);
};

hashtag.addEventListener('input', () => {
  makeArray();

  if (hashtagArray.length > HASHTAG_QUANTITY) {
    hashtag.setCustomValidity('Хеш-тэгов не должно быть больше 5');
    hashtag.classList.add('validation__error');
  } else {
    hashtag.setCustomValidity('');
    hashtag.classList.remove('validation__error');
  }
  hashtag.reportValidity();

  for (let i = 0; i <= hashtagArray.length - DECREASE_ARRAY_LENGTH; i++) {
    const hashtagValue = hashtagArray[i];
    for (let j = i + 1; j <= hashtagArray.length - 1; j++) {
      if (hashtagArray[j] === hashtagValue) {
        hashtag.setCustomValidity('Один и тот же хэш-тег не может быть использован дважды');
        hashtag.classList.add('validation__error');
      } else {
        hashtag.setCustomValidity('');
        hashtag.classList.remove('validation__error');
      }
      hashtag.reportValidity();
    }
  }

  hashtagArray.forEach((value, index, array) => {
    if (value.length > HASHTAG_LENGTH) {
      hashtag.setCustomValidity('Максимальная длина одного хэш-тега 20 символов, включая решётку');
      hashtag.classList.add('validation__error');
    } else if (!HASHTAG_PATTERN.test(value)) {
      hashtag.setCustomValidity('Хэш-тег не соответствует шаблону');
      hashtag.classList.add('validation__error');
    } else if (array[0] === '') {
      hashtag.setCustomValidity('');
      hashtag.classList.remove('validation__error');
    } else {
      hashtag.setCustomValidity('');
      hashtag.classList.remove('validation__error');
    }
    hashtag.reportValidity();
  });

});

export {uploadFormOpen, uploadFormClose};
