import { getRandomIntInclusive } from './util';
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
let id = 1;
const createDescription = () => ({
  id: id++,
  url: `photos/${ id - 1  }.jpg`,
  description: PHOTO_DESCRIPTION[id - 2],
  likes: getRandomIntInclusive(15, 200),
  comment: COMMENTS.slice(0, getRandomIntInclusive(1, 6)),
});
const photos = Array.from({length: COUNT_DESCRIPTIONS}, createDescription);

// eslint-disable-next-line no-console
console.log(photos);

export {photos};
