import { getRandomIntInclusive } from './util.js';

const COMMENT_MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENT_AUTHOR = ['Алиса', 'Марк', 'Александр', 'Алина', 'Денис', 'Вера'];
const COMMENTS = [];
const commentNumber = {
  min: 0,
  max: 6,
};
for (let index = 0; index <= COMMENT_MESSAGE.length; index++) {
  const listItem = {};
  listItem.id = getRandomIntInclusive(0, commentNumber.max);
  listItem.avatar = `img/avatar-${  getRandomIntInclusive(1, commentNumber.max)  }.svg`;
  listItem.message = COMMENT_MESSAGE[getRandomIntInclusive(0, (commentNumber.max - 1))];
  listItem.name = COMMENT_AUTHOR[getRandomIntInclusive(0, (commentNumber.max - 1))];
  COMMENTS.push(listItem);
}

export {COMMENTS};
