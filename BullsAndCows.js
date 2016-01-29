function bullsAndCows(digit, numGuesses, arrayOfGuesses) {
  var digitArray = digit.split('');
  var output = [];

  if (arrayOfGuesses.length > numGuesses) return console.log(`cannot take more than ${numGuesses} guesses`);

  function count(array1, array2) {
    var correctAndOrdered = 0;
    var numCorrectDigit = 0;
    array1.forEach( (num, index) => {
      if (num === array2[index]) {
        correctAndOrdered ++;
      }
      else {
        for (var ii = 0; ii < array2.length; ii++) {
          if (num == array2[ii]) {
            numCorrectDigit++;
            break;
          }
        }
      }
    });
    output.push(`${correctAndOrdered} - ${numCorrectDigit}`);
  }

  arrayOfGuesses.forEach( guess => {
    var digitGuess = guess.split('');
    count(digitArray, digitGuess);
  });

  console.log(output);
}


bullsAndCows('1492', 4, ['2013', '1865', '1234', '4321', '7491']);
bullsAndCows('1492', 5, ['2013', '1865', '1234', '4321', '7491']);
