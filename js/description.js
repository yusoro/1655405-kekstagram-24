import { getRandomIntInclusive } from './util.js';
import { comments } from './comments.js';

const photoDescription = ['В деревне у бабушки',
  'Кот уснул в миске с молоком', 'Золотая осень в Санкт-Петербурге', 'Вид на Бурдж-Халифа',
  'Новый интерьер нашего дома', 'Лунный свет в горах','Ночь в Дубае','На Черном море',
  'Северное сияние в Териберке','Собрал конструктор лего','Держу Пизанскую башню','Ночной город',
  'В деревне у бабушки', 'Кот уснул в миске с молоком', 'Золотая осень в Санкт-Петербурге',
  'Вид на Бурдж-Халифа', 'Новый интерьер нашего дома', 'Лунный свет в горах','Ночь в Дубае',
  'На Черном море','Северное сияние в Териберке','Собрал конструктор лего','Держу Пизанскую башню',
  'Ночной город', 'Зима в лесу'];

const COUNT_DESCRIPTIONS = 25;
const photos = [];
const LIKES = {
  min: 15,
  max: 200,
};
let id = 1;
const createDescription = () => ({
  id: id++,
  url: `photos/${ id - 1  }.jpg`,
  description: photoDescription[id - 2],
  likes: getRandomIntInclusive(LIKES.min, LIKES.max),
  comments: comments.slice(0, getRandomIntInclusive(1, 6)),
});
for (let i = 0; i < COUNT_DESCRIPTIONS; i++) {
  photos.push(createDescription());
}

export {photos};
