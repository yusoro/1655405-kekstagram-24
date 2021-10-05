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

const PHOTO_DESCRIPTION = ['В деревне у бабушки',
  'Кот уснул в миске с молоком', 'Золотая осень в Санкт-Петербурге', 'Вид на Бурдж-Халифа',
  'Новый интерьер нашего дома', 'Лунный свет в горах','Ночь в Дубае','На Черном море',
  'Северное сияние в Териберке','Собрал конструктор лего','Держу Пизанскую башню','Ночной город',
  'В деревне у бабушки', 'Кот уснул в миске с молоком', 'Золотая осень в Санкт-Петербурге',
  'Вид на Бурдж-Халифа', 'Новый интерьер нашего дома', 'Лунный свет в горах','Ночь в Дубае',
  'На Черном море','Северное сияние в Териберке','Собрал конструктор лего','Держу Пизанскую башню',
  'Ночной город', 'Зима в лесу'];
const COMMENT_MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENT_AUTHOR = ['Алиса', 'Марк', 'Александр', 'Алина', 'Денис', 'Вера'];
const COMMENTS = [];
for (let index = 1; index <= 6; index++) {
  const listItem = {};
  listItem.id = getRandomIntInclusive(1, 6);
  listItem.avatar = `img/avatar-${  getRandomIntInclusive(1, 6)  }.svg`;
  listItem.message = COMMENT_MESSAGE[getRandomIntInclusive(0, 5)];
  listItem.name = COMMENT_AUTHOR[getRandomIntInclusive(0, 5)];
  COMMENTS.push(listItem);
}
const COUNT_DESCRIPTIONS = 25;
let id = 1;
const createDescription = () => ({
  id: id++,
  url: `photos/${ id - 1  }.jpg`,
  description: PHOTO_DESCRIPTION[id - 2],
  likes: getRandomIntInclusive(15, 200),
  comment: COMMENTS[getRandomIntInclusive(1, 6)],
});
const photos = Array.from({length: COUNT_DESCRIPTIONS}, createDescription);

// eslint-disable-next-line no-console
console.log(photos);
