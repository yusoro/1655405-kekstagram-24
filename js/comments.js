import { getRandomIntInclusive } from './util.js';

const commentMessage = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const commentAuthor = ['Алиса', 'Марк', 'Александр', 'Алина', 'Денис', 'Вера'];
const comments = [];
const commentNumber = {
  min: 0,
  max: 6,
};
for (let index = 0; index <= commentMessage.length; index++) {
  const listItem = {};
  listItem.id = getRandomIntInclusive(0, commentNumber.max);
  listItem.avatar = `img/avatar-${  getRandomIntInclusive(1, commentNumber.max)  }.svg`;
  listItem.message = commentMessage[getRandomIntInclusive(0, (commentNumber.max - 1))];
  listItem.name = commentAuthor[getRandomIntInclusive(0, (commentNumber.max - 1))];
  comments.push(listItem);
}

export {comments};
