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
getRandomIntInclusive(1, 6);


function getStringLength(string, maxStringLength) {
  return string.length <= maxStringLength;
}
getStringLength('Классное фото', 140);

export {getRandomIntInclusive};
