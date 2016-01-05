var cool = require('cool-ascii-faces');//gives you module
var pets = require('./pets');
console.log(pets);
console.log(pets.getPets({allowDogs: true}));
console.log('hello ' + cool());
