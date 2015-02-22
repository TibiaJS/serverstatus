'use strict';

function Server(obj) {
  this.uptime         = parseInt(obj.uptime);
  this.ip             = obj.ip;
  this.servername     = obj.servername;
  this.port           = parseInt(obj.port);
  this.location       = obj.location;
  this.url            = obj.url;
  this.server         = obj.server;
  this.version        = obj.version;
  this.client         = obj.client;
}

module.exports = Server;
