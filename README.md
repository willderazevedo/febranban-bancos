# febraban-bancos [![NPM version](https://img.shields.io/npm/v/arr-diff.svg?style=flat)](https://www.npmjs.com/package/febraban-bancos) [![NPM monthly downloads](https://img.shields.io/npm/dm/arr-diff.svg?style=flat)](https://npmjs.org/package/febraban-bancos)

> Retorna um array com todos os bancos Brasileiros relacionados ao Febraban

## Como instalar

Instalar usando [npm](https://www.npmjs.com/):

```sh
$ npm install --save febraban-bancos
```

## Modo de usar

Uso no JS básico

```js
var FebrabanBanks = require('febraban-bancos');


console.log(FebrabanBanks.getBanks())
/*
[
  {
    "code": "001",
    "name": "Banco do Brasil"
  }
  ...
]
*/
```

Uso na linha de comando (PHP ou outros)

```js
var FebrabanBanks = require('febraban-bancos');


FebrabanBanks.getBanks();
```

```bash
$ node <seu_arquivo_com_require_acima>.js -l ou --log
```
### Autor

**Willder Azevedo**

* [github/willderazevedo](https://github.com/willderazevedo)

### Licença

Copyright © 2018, [Willder Azevedo](https://github.com/willderazevedo).
Released under the [MIT License](LICENSE).
