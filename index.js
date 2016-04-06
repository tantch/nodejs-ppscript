var request = require('request');
var beautify = require('js-beautify').js_beautify;
var fs = require('fs');


request('http://pokeapi.co/api/v2/pokemon/1', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    fs.writeFile("cenas.json", beautify(body, { indent_size: 2 }));
  }
})
