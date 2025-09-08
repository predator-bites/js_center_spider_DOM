'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

addEventListener('DOMContentLoaded', () => {
  if (
    wall.clientWidth !== null &&
    typeof wall.clientWidth !== 'undefined' &&
    spider.clientWidth !== null &&
    typeof spider.clientWidth !== 'undefined' &&
    wall.clientHeight !== null &&
    typeof wall.clientHeight !== 'undefined' &&
    spider.clientHeight !== null &&
    typeof spider.clientHeight !== 'undefined'
  ) {
    wall.style.position = 'absolute';
    spider.style.position = 'absolute';
    spider.style.left = `${(wall.clientWidth - spider.clientWidth) / 2}px`;
    spider.style.top = `${(wall.clientHeight - spider.clientHeight) / 2}px`;
  }
});
