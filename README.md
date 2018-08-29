# febraban-bancos [![NPM version](https://img.shields.io/npm/v/febraban-bancos.svg?style=flat)](https://www.npmjs.com/package/febraban-bancos) [![NPM monthly downloads](https://img.shields.io/npm/dm/febraban-bancos.svg?style=flat)](https://npmjs.org/package/febraban-bancos)

> Returns a array with all Brazilian banks relationed with Febraban

## Install

Install using [npm](https://www.npmjs.com/):

```sh
$ npm install --save febraban-bancos
```

## How to use

Create your js file and do as below

```js
var FebrabanBanks = require('febraban-bancos');

FebrabanBanks.getBanks().then(data => {
  // Do your stuff
}).catch(err => {
  // Do your stuff
});
```

## Return

```json
[
  {
    "code": "101",
    "name": "Banco do Brasil"
  },
]
```

### Author

**Willder Azevedo**

* [github/willderazevedo](https://github.com/willderazevedo)

### License

Copyright © 2018, [Willder Azevedo](https://github.com/willderazevedo).
Released under the [MIT License](LICENSE).
