'use strict'
WebAssembly.instantiate(require('node:fs').readFileSync('./test.wasm'), {})
  .then(wasm => wasm.instance.exports.test)
  .then(test => test(2021, 2000))
  .then(console.log);
