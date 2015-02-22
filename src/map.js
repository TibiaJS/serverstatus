'use strict';

function Map(obj) {
  this.name      = obj.name;
  this.author    = obj.author;
  this.width     = parseInt(obj.width);
  this.height    = parseInt(obj.height);
}

module.exports = Map;
