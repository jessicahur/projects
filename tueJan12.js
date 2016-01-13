var plants = [];
var week = 1;
var result = 0;

function makefruits(obj) {
  obj.fruits ++;
}

function sum(prev, curr) {
  return prev + curr;
}

function makeplant() {
  var newPlant = {
    fruits: 0
  };
  return newPlant;
}

function main(numFruits, numPpl) {

  // console.log('ALL PLANTS',plants);

  if (week === 1 ) {
    for (var ii = 0; ii < numFruits; ii++) {
      plants.push(makeplant());
    }
    week ++;
    console.log(week);
  }
  else {
    for (var ii = 0; ii < numFruits; ii++) {
      plants.push(makeplant());
    }
    week ++;
  }
  var totalFruits = 0;

  plants.forEach(function(plant) {
    makefruits(plant);
    totalFruits += plant.fruits;
  });

  console.log(totalFruits);
  if (totalFruits < numPpl) {
    main(totalFruits, numPpl);
  }
  else {
    result = week;
    console.log('RESULT', result);
  }

}

module.exports = main;
// main(1,15);
main(15, 200);
// main(1, 50000);
// main(250, 150000 );
