function getRandomIntInclusive(min, max) {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return false;
  }
}
getRandomIntInclusive(0, 5);


function getStringLength(stringLength, maxStringLength) {
  if (stringLength <= maxStringLength) {
    return true;
  }
  return false;
}
getStringLength(10, 140);
