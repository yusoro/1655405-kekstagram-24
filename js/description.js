import { getRandomIntInclusive } from './util.js';
import { COMMENTS } from './comments.js';

const PHOTO_DESCRIPTION = ['В деревне у бабушки',
  'Кот уснул в миске с молоком', 'Золотая осень в Санкт-Петербурге', 'Вид на Бурдж-Халифа',
  'Новый интерьер нашего дома', 'Лунный свет в горах','Ночь в Дубае','На Черном море',
  'Северное сияние в Териберке','Собрал конструктор лего','Держу Пизанскую башню','Ночной город',
  'В деревне у бабушки', 'Кот уснул в миске с молоком', 'Золотая осень в Санкт-Петербурге',
  'Вид на Бурдж-Халифа', 'Новый интерьер нашего дома', 'Лунный свет в горах','Ночь в Дубае',
  'На Черном море','Северное сияние в Териберке','Собрал конструктор лего','Держу Пизанскую башню',
  'Ночной город', 'Зима в лесу'];

const COUNT_DESCRIPTIONS = 25;
const PHOTOS = [];
const LIKES = {
  min: 15,
  max: 200,
};
let id = 1;
const createDescription = () => ({
  id: id++,
  url: `photos/${ id - 1  }.jpg`,
  description: PHOTO_DESCRIPTION[id - 2],
  likes: getRandomIntInclusive(LIKES.min, LIKES.max),
  comments: COMMENTS.slice(0, getRandomIntInclusive(1, 6)),
});
for (let i = 0; i < COUNT_DESCRIPTIONS; i++) {
  PHOTOS.push(createDescription());
}

export {PHOTOS};
