

exports.getBasicInfo = function(poke){

  var pokemon = {
    id: poke.id,
    name: poke.name,
    height: poke.height,
    weight: poke.weight,
    defaultSprite: poke.sprites.front_default,
    stat: poke.stats,
    types: poke.types
  };



return pokemon;

}
