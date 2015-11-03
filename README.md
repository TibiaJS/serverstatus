#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Code Climate][climate-image]][climate-url] [![Test Coverage][coverage-image]][coverage-url]

> Catch information like players online, owner, motd, map weight, monsters, npcs, etc. passing IP and PORT from Tibia Server


## Install

```sh
$ npm install --save tibia-status
```


## Usage

```js
var ServerStatus = require('tibia-status');

var otserv = new ServerStatus('underwar.org');
otserv
  .then(function(data) {
    console.log(data);
  })
  .fail(function(err) {
    console.error(err);
  });

/* 
  { server:
     { uptime: 82139,
       ip: '192.99.19.223',
       servername: 'UnderWar',
       port: 7171,
       location: 'Brazil',
       url: 'http://undewar.org',
       server: 'UnderWar~W.G',
       version: '0.5.0',
       client: '8.60' },
    owner: { name: 'TGC', email: 'underwar@gmail.com' },
    players: { online: 329, max: 1200, peak: 518 },
    monsters: 50704,
    map: { name: '', author: '', width: 65000, height: 65000 },
    rates: { experience: 1, magic: 1, skill: 1, loot: 1, spawn: 3 },
    motd: 'Welcome to the UnderWar Server! TeamSpeak 3: ts3.underwar.org' }
*/
```

## License

The MIT License (MIT)

Copyright (c) 2015 TibiaJS

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm-url]: https://npmjs.org/package/tibia-status
[npm-image]: https://badge.fury.io/js/tibia-status.svg
[travis-url]: https://travis-ci.org/TibiaJS/serverstatus
[travis-image]: https://travis-ci.org/TibiaJS/serverstatus.svg?branch=master
[daviddm-url]: https://david-dm.org/TibiaJS/serverstatus.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/TibiaJS/serverstatus
[coverage-image]: https://codeclimate.com/github/TibiaJS/serverstatus/badges/coverage.svg
[coverage-url]: https://codeclimate.com/github/TibiaJS/serverstatus/coverage
[climate-image]: https://codeclimate.com/github/TibiaJS/serverstatus/badges/gpa.svg
[climate-url]: https://codeclimate.com/github/TibiaJS/serverstatus
