const getRandomIntInclusive = (min, max) => {
  if (min < 0 || max < 0) { return -1; }
  if (min > max) {
    [min, max] = [max, min];
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  //return Math.floor(Math.random() * (max - min + 1)) + min;

  const arr = [];
  for (let i = 0; i < max; i++) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (arr.includes(num)) {
      i = i - 1;
    } else {
      arr.push(num);
    }
    return arr[i];
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
const COMMENTS = [
  {
    id: getRandomIntInclusive(1, 6),
    avatar: `img/avatar-${  getRandomIntInclusive(1, 6)  }.svg`,
    message: COMMENT_MESSAGE[getRandomIntInclusive(0, 5)],
    name: COMMENT_AUTHOR[getRandomIntInclusive(0, 5)],
  },
];
const COUNT_DESCRIPTIONS = 25;
const createDescription = () => ({
  id: getRandomIntInclusive(1, 25),
  url: `photos/${  getRandomIntInclusive(1, 25)  }.jpg`,
  description: PHOTO_DESCRIPTION[getRandomIntInclusive(0, 24)],
  likes: getRandomIntInclusive(15, 200),
  comment: COMMENTS[getRandomIntInclusive(1, 6)],
});
const photos = Array.from({length: COUNT_DESCRIPTIONS}, createDescription);

console.log(photos);
