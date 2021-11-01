const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) { return -1; }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);

  const arr = [];

  for (let index = 0; index < max; index++) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (arr.includes(num)) {
      index = index - 1;
    } else {
      arr.push(num);
    }
    return arr[index];
  }
};

function getStringLength(string, maxStringLength) {
  return string.length <= maxStringLength;
}

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const errorTemplate = document.querySelector('#error').content;
const errorContainer = errorTemplate.querySelector('.error');
const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content;
const successContainer = successTemplate.querySelector('.success');

const errorAlert = () => {
  const errorMessage = errorContainer.cloneNode(true);
  errorMessage.style.zIndex = 10;
  body.appendChild(errorMessage);

  errorMessage.querySelector('.error__button').addEventListener('click', () => {
    errorMessage.style.display = 'none';

  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      errorMessage.style.display = 'none';
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.contains(errorMessage)) {
      errorMessage.style.display = 'none';
    }
  });
};

const successAlert = () => {
  const successMessage = successContainer.cloneNode(true);
  successMessage.style.zIndex = 10;
  body.appendChild(successMessage);

  successMessage.querySelector('.success__button').addEventListener('click', () => {
    successMessage.style.display = 'none';

  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      successMessage.style.display = 'none';
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.contains(successMessage)) {
      successMessage.style.display = 'none';
    }
  });
};

const getDataAlert = () => {
  const dataAlertMessage = errorContainer.cloneNode(true);
  dataAlertMessage.style.zIndex = 10;
  dataAlertMessage.querySelector('h2').textContent = 'Ошибка загрузки данных с сервера';
  dataAlertMessage.querySelector('button').textContent = 'Попробуйте обновить страницу';
  body.appendChild(dataAlertMessage);

  dataAlertMessage.querySelector('button').addEventListener('click', () => {
    dataAlertMessage.style.display = 'none';

  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      dataAlertMessage.style.display = 'none';
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.contains(dataAlertMessage)) {
      dataAlertMessage.style.display = 'none';
    }
  });

};

export {getRandomIntInclusive, isEscapeKey, errorAlert, successAlert, getDataAlert};
export {getStringLength};
