'use strict';

function Rates(obj) {
  this.experience = parseInt(obj.experience);
  this.magic      = parseInt(obj.magic);
  this.skill      = parseInt(obj.skill);
  this.loot       = parseInt(obj.loot);
  this.spawn      = parseInt(obj.spawn);
}

module.exports = Rates;
