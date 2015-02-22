/*global describe, it */
'use strict';
var assert = require('assert');
var ServerStatus = require('../');

describe('Server Status', function () {
  it('existing server', function () {
    var otserv = new ServerStatus('underwar.org');
    otserv.then(function(data){
      assert(data.server.servername, 'UnderWar');
    });
  });

  it('unknown server', function() {
    var otserv = new ServerStatus('underwax.org');
    otserv
      .then(function(data) {
        assert(data, !undefined);
      })
      .fail(function(err) {
        assert(err, new Error('Server not found'));
      });
  });
});
