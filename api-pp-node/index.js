var express = require('express');
var app = express();


const pokeapi = require('./pokereq.js');
const pokemon  = require('./pokemon.js');
/*logName = function(o) {
  console.log(o.name);
}

basicInfo = function(pk){
  var poke = pokemon.getBasicInfo(pk);
  console.log(JSON.stringify(poke));
}

logNameForArray = function(array) {
  for (var i = 0; i < array.length; i++) {
    var j = i + 1;
    console.log('pokemon ' + j + ": " + array[i].name);
  }
}*/

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/',function (req,res){
  res.send('Hello World!');
});
app.get('/pokemons', function (req, res) {

  pokeapi.getListAll('pokemon',pokeapi.getList,res);

});
app.get('/pokemon/:id',function(req,res){

  pokeapi.getIdStuff('pokemon',req.params.id,res);
});
app.get('/move/:id',function(req,res){

  pokeapi.getIdStuff('move',req.params.id,res);
});
app.get('/forms',function(req,res){

  pokeapi.getStuff('pokemon-form',res);
});
app.get('/species',function(req,res){

  pokeapi.getStuff('pokemon-species',res);
});
app.get('/species/:id',function(req,res){

  pokeapi.getIdStuff('pokemon-species',req.params.id,res);
});
app.get('/chain/:id',function(req,res){

  pokeapi.getIdStuff('evolution-chain',req.params.id,res);
});
app.get('/colors',function(req,res){

  pokeapi.getStuff('pokemon-color',res);
});
app.get('/color/:id',function(req,res){

  pokeapi.getIdStuff('pokemon-color',req.params.id,res);
});
app.get('/shape',function(req,res){

  pokeapi.getStuff('pokemon-shape',res);
});
app.get('/shape/:id',function(req,res){

  pokeapi.getIdStuff('pokemon-shape',req.params.id,res);
});
app.get('/habitats',function(req,res){

  pokeapi.getStuff('pokemon-habitat',res);
});
app.get('/habitat/:id',function(req,res){

  pokeapi.getIdStuff('pokemon-habitat',req.params.id,res);
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});


/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var mode;
rl.question('Write the name of the resource to search (singular): \n', (name) => {


  rl.question('Select search mode ( 1- ById, 2- List): \n', (mode) => {

    if (mode == 1) {
      rl.question('Write pokemon id: \n', (id) => {
        pokeapi.getById(name,id, basicInfo);

        rl.close();
      });
    } else if (mode == 2) {
      rl.question('Select limit  for the list: \n', (lm) => {

        rl.question('Select offset: \n', (of) => {

          pokeapi.getList(name,lm, of, logNameForArray);
          rl.close();
        });

      });
    }

  });

});*/
