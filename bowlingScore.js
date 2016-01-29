'use strict';
const dict = {
  '-': 0,
  'X': 10,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9
}

var input = 'X X X X X X X X X XXX';

function score(input) {
  var result = 0;
  var eachFrame = input.split(' ');

  function getScore(index, num){
    var score = 0;
    var s = eachFrame[index].split('');
    for (var ii = 0; ii < num; ii++){
      if(dict[ s[ii] ]) score += dict[ s[ii] ];
      if(!dict[ s[ii] ]) score += getScore(index++, num-1)
    }
    return score;
  }

  var lastFrame = eachFrame[9].split('');

  var lastScore = 0;
  lastFrame.forEach( s => {
    if (dict[s]) lastScore += dict[s];
  });

  result += lastScore;

  var ninthScore = 0;
  var ninthFrame = eachFrame[8].split('');
  ninthFrame.forEach(s => {
    if (dict[s]) ninthScore += dict[s];
  });
  result += ninthScore;

  if (ninthFrame[0] === 'X' ) {
    result += getScore(eachFrame[9], 2);
  }
  if (ninthFrame[1] === '/') {
    result += getScore(eachFrame[9],1);
  }

  console.log(result);

  for (var ii = 7; ii >=0; ii--) {
    var currentScore = 0;
    var currentFrame = eachFrame[ii].split('');

    currentFrame.forEach( s => {
      if(dict[s]) currentScore += dict[s];
    });

    result += currentScore;

    if (currentFrame[0] === 'X') result += getScore(ii++,2);
    if (currentFrame[1] === '/') result += getScore(ii++,1);

    console.log(currentFrame,'currentScore', currentScore);

  }
  console.log('FINAL',result);

}

// score(input);
// score('X -/ X 5- 8/ 9- X 81 1- 4/X');
score('62 71  X 9- 8/  X  X 35 72 5/8');
