'use strict';
var Q = require('q');

var message = new Buffer([0x06, 0x00, 0xFF, 0xFF, 0x69, 0x6E, 0x66, 0x6F]); 

function ServerStatus(host, port) {
  this.host     = host;
  this.port     = port || 7171;
  this.deferred = Q.defer();

  return this.execute();
}

ServerStatus.prototype.execute = function() {
  var net  = require('net'),
    client = new net.Socket(),
    status,
    self   = this;

  client.connect(self.port, self.host, function() {
    client.write(message);
  });

  client.on('data', function(data) {
    var xml  = require('xml2js'),
      parser = xml.Parser(),
      Status = require('./status');

    parser.parseString(data.toString('utf8'), function(err, data) {
      if(err) {
        self.deferred.reject(err);
      }

      status = new Status(data);
      self.deferred.resolve(status);
    });

    client.destroy();
  });

  client.on('error', function(err) {
    if(err.code === 'ENOTFOUND' || err.code === 'ECONNREFUSED') {
      err = new Error('Server not found');
    } else if (err.code === 'ETIMEDOUT') {
      err = new Error('Server Timeout');
    }

    self.deferred.reject(err);
  });

  return self.deferred.promise;
};

module.exports = ServerStatus;
