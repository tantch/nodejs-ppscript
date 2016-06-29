var request = require('request');
var baseUrl = 'http://pokeapi.co/api/v2/';
/*troquei fn por res por isso nao deve dar o codigo comenado anteriormente*/

exports.getList = function(name,limit, offset, res) {

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
    res.json(response.body.results);



  });
}

exports.getListAll = function(name,fn,res) {

  request({
    url: baseUrl +  name + '/',
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
    var count=response.body.count;

    fn(name,count,0,res);

  });
}

exports.getStuff = function(name,res) {

  request({
    url: baseUrl +  name + '/',
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
    res.json(response.body);

  });
}

exports.getIdStuff = function(name,id,res) {

  request({
    url: baseUrl +  name + '/' + id,
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

    res.json(response.body);

  });
}