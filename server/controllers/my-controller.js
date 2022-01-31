'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('strapi-tetris')
      .service('myService')
      .getWelcomeMessage();
  },
};
