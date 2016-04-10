var request = require('request');
var beautify = require('js-beautify').js_beautify;
var fs = require('fs');
var crypto = require('crypto');


var publicKey = '5845f469f598ba77c8e2f8d607dda7fa';
var privatekey = '31fc1b782b495b25526e89c26d792fe1fe2fdf40';

timestamp = function() {
  return parseInt(Date.now() / 1000, 10);
};
var ts = timestamp();
var prehash = ts + privatekey + publicKey;
var hash = crypto.createHash('md5').update(prehash).digest('hex');




console.log(hash);

request({
  url: 'http://gateway.marvel.com:80/v1/public/characters',
  json: true,
  qs: {
    ts: ts,
    apikey: publicKey,
    hash: hash,
    limit: 100,
    offset: 0
  }
}, function(err, response) {
  if (err) {
    console.log(err);
  }

  if (response.statusCode !== 200) {
    console.log(response.statusCode);
  }
  var results = response.body.data.results;
  var stream = fs.createWriteStream("names.txt");
  for (var i = 0; i < results.length; i++) {
    stream.write(results[i].name + "\n");
  }

});
