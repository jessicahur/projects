var people = [
  ['Sean'], [ 'Winnie'], ['Brian', 'Amy'], ['Samir'], ['Joe', 'Bethany'],
  ['Bruno', 'Anna', 'Matthew', 'Lucas'], ['Gabriel', 'Martha', 'Philip'], ['Andre'],
  ['Danielle'], ['Leo','Cinthia'], ['Paula'], ['Mary', 'Jane'], ['Anderson'],
  ['Priscilla'], ['Regis', 'Julianna', 'Arthur'], ['Mark', 'Marina'], ['Alex', 'Andrea']
  ]
var result = [];

function randomize (min, max){
  return Math.floor(Math.random()*(max-min+1));
}

function main (){

  while (people.length > 1){

    var first = randomize (1, people.length-1);
    console.log(first);
    var second = randomize (1, people.length-1);

    while (second === first){
      second = randomize (1, people.length);
    }
    console.log(second);
    var firstToAssign = people[first];
    console.log(firstToAssign);

    var secondToAssign = people[second];
    console.log(secondToAssign);

    // var check = firstToAssign[0]+secondToAssign[0];

    // if (result.indexOf(check)!==-1){
      result.push([firstToAssign[0], secondToAssign[0]]);
    // }

    firstToAssign.splice(0,1);
    console.log('first after ', firstToAssign);
    secondToAssign.splice(0,1);
    console.log('second after ', secondToAssign);

    if (firstToAssign.length === 0) people.splice(first,1);
    if (secondToAssign.length ===0) people.splice(second,1);
    console.log('people array ',people,'new length', people.length);
    console.log('result',result);

    console.log(people.length);
  }
  // }
}

// }

  // return result;
// }

main();

// module.exports = main;
