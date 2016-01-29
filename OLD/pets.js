var cats = ['felix', 'tom', 'garfield'];
var dogs = ['benji', 'percy', 'scooby']
var pets = {
  getPets: function (options){
    return options.allowDogs ? cats.concat(dogs) :cats.slice();
  }
};
exports.getPets = pets.getPets; //same as module.exports (node global keyword/variable)
console.log(module.exports === exports); //returns true
// module.exports = pets;
// exports = pets;
// console.log(exports.getPets({allowDogs:true}));
