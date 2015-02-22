'use strict';

var Server  = require('./server')
  , Owner   = require('./owner')
  , Players = require('./players')
  , Map     = require('./map')
  , Rates   = require('./rates');

function ServerInfo(obj) {
  obj = obj.tsqp;

  this.server   = new Server(obj.serverinfo[0].$);
  this.owner    = new Owner(obj.owner[0].$);
  this.players  = new Players(obj.players[0].$);
  this.monsters = parseInt(obj.monsters[0].$.total);
  this.map      = new Map(obj.map[0].$);
  this.rates    = new Rates(obj.rates[0].$);
  this.motd     = obj.motd[0];
}

module.exports = ServerInfo;
