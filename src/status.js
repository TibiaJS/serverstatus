'use strict';

var Server  = require('./server'),
    Owner   = require('./owner'),
    Players = require('./players'),
    Map     = require('./map'),
    Rates   = require('./rates');

function ServerInfo(obj) {
  obj = obj.tsqp;

  var keys = Object.keys(obj);

  if (keys.indexOf('serverinfo') !== -1) {
    this.server = new Server(obj.serverinfo[0].$);
  }

  if (keys.indexOf('owner') !== -1) {
    this.owner = new Owner(obj.owner[0].$);
  }

  if (keys.indexOf('players') !== -1) {
    this.players = new Players(obj.players[0].$);
  }

  if (keys.indexOf('monsters') !== -1) {
    this.monsters = parseInt(obj.monsters[0].$.total);
  }

  if (keys.indexOf('map') !== -1) {
    this.map = new Map(obj.map[0].$);
  }

  if (keys.indexOf('rates') !== -1) {
    this.rates = new Rates(obj.rates[0].$);
  }

  if (keys.indexOf('motd') !== -1) {
    this.motd = obj.motd[0];
  }

}

module.exports = ServerInfo;
