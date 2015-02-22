'use strict';

function Players(obj) {
  this.online = parseInt(obj.online);
  this.max    = parseInt(obj.max);
  this.peak   = parseInt(obj.peak);
}

module.exports = Players;
