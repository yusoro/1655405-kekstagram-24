import {getDataAlert} from './util.js';

const getData = (onSuccess) => {
  fetch('https://24.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((thumbnails) => {
      onSuccess(thumbnails);
    })
    .catch(() => {
      getDataAlert();
    });
};

const sendData = (successAlert, errorAlert, body) => {
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        successAlert();
      } else {
        errorAlert();
      }
    })
    .catch(() => {
      errorAlert();
    });
};

export {getData, sendData};
