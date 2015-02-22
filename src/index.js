'use strict';
var Q = require('q');

function ServerStatus(host, port) {
  this.host     = host;
  this.port     = port || 7171;
  this.deferred = Q.defer();

  return this.execute();
}

ServerStatus.prototype.getMessage = function() {
  return new Buffer([0x06, 0x00, 0xFF, 0xFF, 0x69, 0x6E, 0x66, 0x6F]);
};

ServerStatus.prototype.execute = function() {
  var net  = require('net')
  , client = new net.Socket()
  , status = undefined
  , self   = this;

  client.connect(self.port, self.host, function() {
    client.write(self.getMessage());
  });

  client.on('data', function(data) {
    var xml  = require('xml2js')
    , parser = xml.Parser()
    , Status = require('./status');

    parser.parseString(data.toString('utf8'), function(err, data) {
      if(err) {
        self.deferred.reject(new Error(err));
      }

      status = new Status(data);
      self.deferred.resolve(status);
    });

    client.destroy();

    return self.deferred.promise;
  });

  client.on('timeout', function() {
    self.deferred.reject(new Error('Server Timeout'));
  });

  client.on('error', function(err) {
    if(err.code == 'ENOTFOUND') {
      self.deferred.reject(new Error('Server not found'));
    } else {
      self.deffered.reject(err);
    }
  });

  return self.deferred.promise;
};

module.exports = ServerStatus;
