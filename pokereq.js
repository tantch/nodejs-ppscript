var request = require('request');
var baseUrl = 'http://pokeapi.co/api/v2/';


exports.getById = function(name,id,fn) {
  request({
    url: baseUrl + name + '/' + id,
    json: true,
  }, function(err, response) {
    if (err) {
      console.log(err);
      return;
    }

    if (response.statusCode !== 200) {
      console.log(response.statusCode);
      return;
    }
    fn(response.body);



  });
}


exports.getList = function(name,limit, offset, fn) {

  request({
    url: baseUrl +  name + '/',
    json: true,
    qs: {
      limit: limit,
      offset: offset
    }
  }, function(err, response) {
    if (err) {
      console.log(err);
      return;
    }

    if (response.statusCode !== 200) {
      console.log(response.statusCode);
      return;
    }
    fn(response.body.results);



  });


}
