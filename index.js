var request = require('request');
var beautify = require('js-beautify').js_beautify;
var fs = require('fs');
var crypto = require('crypto');


var publicKey = '5845f469f598ba77c8e2f8d607dda7fa';
var privatekey =  '31fc1b782b495b25526e89c26d792fe1fe2fdf40';

timestamp = function() {
  return parseInt(Date.now() / 1000, 10);
};
var ts= timestamp();
var prehash = ts  + privatekey + publicKey;
var hash = crypto.createHash('md5').update(prehash).digest('hex');




console.log(hash);

request({
      url: 'http://gateway.marvel.com/v1/public/creators'
    , json: true
    , qs: {
        ts: ts
      , apikey: publicKey
      , hash: hash
      , limit:20
      , offset: 0
      }
    }, function(err, response) {
      if (err) {
        console.log(err);
      }

      if (response.statusCode !== 200) {
      console.log(response.statusCode);
      }
      console.log(response);
      fs.writeFile("cenas.txt",JSON.stringify(response.body));
  });
