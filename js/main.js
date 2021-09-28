function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) { return -1; }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(2, 5);


function getStringLength(string, maxStringLength) {
  return string.length <= maxStringLength;
}
getStringLength('Классное фото', 140);
