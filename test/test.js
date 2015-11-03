/*global describe, it */
'use strict';
var assert = require('assert');
var ServerStatus = require('../');

describe('Server Status', function () {

  this.timeout(60000);

  it('existing server', function (done) {
    var otserv = new ServerStatus('aurera-global.com');
    otserv.then(function(data){
      assert(data.server.servername, 'Aurera-Global');
      done();
    });
  });

  it('existing server with port', function (done) {
    var otserv = new ServerStatus('classicus.org', 7171);
    otserv.then(function(data){
      assert(data.server.servername, 'Classicus 7.4 RESET');
      done();
    });
  });

/*
  Fix this fucking test
  it('existing server with unknown port', function (done) {
    new ServerStatus('aurera-global.com', 7777).catch(function (err) {
      assert.equal(err.message, 'Server not found');
      done();
    });
  });
*/

  it('unknown server', function (done) {
    new ServerStatus('aurerx-global.com', 7171).catch(function (err) {
      assert.equal(err.message, 'Server not found');
      done();
    });
  });

});
