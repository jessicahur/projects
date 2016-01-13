function shuffle (str) {
  var chars = str.split('');
  console.log('CHARS', chars);

  chars.forEach(function (letter, index) {
    var temp = letter;
    var rand = Math.floor((Math.random() * chars.length));

    chars[index] = chars[rand];
    chars[rand] = temp;

  });
  var result = chars.join('');
  console.log('RESULT', result);
  return result;

  // else if (chars.length === 2) {
  //   var temp = chars[1];
  //   chars[1] = chars[0];
  //   chars[0] = temp;
  //   var result = chars.join('');
  //   return result;
  // }
}
// shuffle('abc');

function main (sentences) {
  var words = sentences.split(' ');
  words.forEach(function(word, index) {
    console.log('INPUT WORD', word);
    if(word.length !==1 && word.length !==2 ){
      if (word.indexOf(',') !== -1 || word.indexOf('.') !== -1 || word.indexOf('!') !== -1) {
        var firstLetter = word.substring(0,1);
        var punctuation = word.substring(word.length-1);
        var middle = shuffle(word.substring(1,word.length-2));
        var lastLetter = word.substring(word.length-2,word.length-1);
        console.log('firstLetter ', firstLetter, 'middle', middle, 'punctuation', punctuation, 'lastLetter', lastLetter );
        var newWord = firstLetter+middle+lastLetter+punctuation;
        words[index] = newWord;
        console.log('WORDS', words);
      }
      else{
        var firstLetter = word.substring(0,1);
        var middle = shuffle(word.substring(1,word.length-1));
        var lastLetter = word.substring(word.length-1);
        var newWord = firstLetter+middle+lastLetter;
        words[index] = newWord;
        console.log('WORDS', words);
      }
    }
  });

return words.join(' ');
}

var Op = main("According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are,  the only important thing is that the first and last letter be in the right place.  The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole.  Such a condition is appropriately called Typoglycemia.");
console.log(Op);
