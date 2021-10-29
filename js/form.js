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
let hashtagArray = [];
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
let currentEffect = 'none';
const effectSlider = document.querySelector('.effect-level__slider');
const valueInput = document.querySelector('.effect-level__value');
const radio = effectsList.querySelectorAll('.effects__radio');
const effects = {
  none: () => {
    imagePreview.style.filter = 'none';
  },
  chrome: (value) => {
    imagePreview.style.filter = `grayscale(${value})`;
    console.log(`28: grayscale(${value})`);
  },
  sepia: (value) => {
    imagePreview.style.filter = `sepia(${value})`;
  },
  marvin: (value) => {
    imagePreview.style.filter = `invert(${value}%)`;
  },
  phobos: (value) => {
    imagePreview.style.filter = `blur(${value}px)`;
  },
  heat: (value) => {
    imagePreview.style.filter = `brightness(${value})`;
  },
};

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


hashtag.addEventListener('input', () => {
  const invalidHashtag = [];

  hashtag.setCustomValidity('');

  const inputText = hashtag.value.toLowerCase().trim();
  if (!inputText) {
    return;
  }

  hashtagArray = inputText.split(/\s+/);

  if (hashtagArray.length === 0) {
    return;
  }

  const isStartNotLattice = hashtagArray.some((item) => item[0] !== '#');
  if (isStartNotLattice) {
    invalidHashtag.push('Хэш-тег должен начинаться с символа #');
  }

  const isOnlyLattice = hashtagArray.some((item) => item === '#');
  if (isOnlyLattice) {
    invalidHashtag.push('Хэш-тег не может состоять из одного символа #');
  }

  const isSplitBySpace = hashtagArray.some((item) => item.indexOf('#', 1) >= 1);
  if (isSplitBySpace) {
    invalidHashtag.push('Хэш-теги разделяются пробелами');
  }

  const isRepeatHashtag = hashtagArray.some((item, i, arr) => arr.indexOf(item, i + 1) >= i + 1);
  if (isRepeatHashtag) {
    invalidHashtag.push('Один и тот же хэш-тег не может быть использован дважды');
  }

  const isLongHashtag = hashtagArray.some((item) => item.length > HASHTAG_LENGTH);
  if (isLongHashtag) {
    invalidHashtag.push('Максимальная длина одного хэш-тега 20 символов, включая решётку');
  }

  if (hashtagArray.length > HASHTAG_QUANTITY) {
    invalidHashtag.push('Хэш-тегов не должно быть больше 5');
  }

  const isNotPattern = hashtagArray.some((item) => HASHTAG_PATTERN.test(item) === false);
  if (isNotPattern) {
    invalidHashtag.push('Хэш-тег не соответсвует шаблону');
  }

  if (invalidHashtag.length > 0) {
    hashtag.setCustomValidity(invalidHashtag.join('. \n'));
    hashtag.classList.add('validation__error');
  } else {
    hashtag.classList.remove('validation__error');
  }
  hashtag.reportValidity();
});

const minimizePhoto = () => {
  scaleControlSmaller.addEventListener('click', () => {
    if (scaleControlValue.value === '100%') {
      scaleControlValue.value = '75%';
      imagePreview.style.transform = 'scale(0.75)';
    } else if (scaleControlValue.value === '75%') {
      scaleControlValue.value = '50%';
      imagePreview.style.transform = 'scale(0.5)';
    } else if (scaleControlValue.value === '50%') {
      scaleControlValue.value = '25%';
      imagePreview.style.transform = 'scale(0.25)';
    }
  });
};

const maximizePhoto = () => {
  scaleControlBigger.addEventListener('click', () => {
    if (scaleControlValue.value === '25%') {
      scaleControlValue.value = '50%';
      imagePreview.style.transform = 'scale(0.5)';
    } else if (scaleControlValue.value === '50%') {
      scaleControlValue.value = '75%';
      imagePreview.style.transform = 'scale(0.75)';
    } else if (scaleControlValue.value === '75%') {
      scaleControlValue.value = '100%';
      imagePreview.style.transform = 'scale(1)';
    }
  });
};

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',

});
valueInput.value = 100;
const applyEffect = () => {
  effectsList.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('effects__preview')) {
      currentEffect = evt.target.classList[1].replace('effects__preview--', '');

      effects[currentEffect](valueInput.value);
    }
  });
};
effectSlider.noUiSlider.on('update', (values, handle) => {
  valueInput.value = values[handle];
  effects[currentEffect](valueInput.value);
});


for (let i = 0; i < radio.length; i++) {
  radio[i].addEventListener('change', (evt) => {
    if (evt.target.value === 'marvin') {
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
    } else if (evt.target.value === 'phobos') {
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
    } else if (evt.target.value === 'heat') {
      effectSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
    }
  });
}

export {uploadFormOpen, uploadFormClose, minimizePhoto, maximizePhoto, applyEffect};
