// function compare(word, offWord) {
//   var ii = 0;
//   var curr = offWord.substring(0,1);
//   var index1 = word.indexOf(curr);
//   if (index1 === -1) return false;
//   var next = offWord.substring(ii++,1);
//   var index2 = word.indexOf(next);
//   if (index1 < index2) {
//     // index1 = index2;
//     word = word.substring(index2);
//     offWord = offWord.substring(1);

//   }
// }

function count(word, offWord){
  myOffWord = {};
  myWord = {};
  for (var ii = 0; ii < offWord.length; ii++){
    var temp = offWord.charAt(ii);
    if (!myOffWord.hasOwnProperty(temp)) myOffWord[temp] = 1;
    else myOffWord[temp] += 1;
  }
  var letters = Object.keys(myOffWord);
  // for (var jj = 0; jj < wor.length; jj++){
  //   if ()
  // }
  for (var jj = 0; jj < letters.length; jj ++){
    var kk = 0;
    var letter = letters[jj];
    while (word.length >0){
      var index = word.indexOf(letters[jj]);
        if(index !== -1) kk++;
      word.substr(index++);
    }
    if (kk !== myOffWord[letter]) return false;
  }
}

function bigger (word, offWord) {
  var check = count(word, offWord);
  if (check === false) return console.log('FALSE');
  compare2(word, offWord);

  function compare2(word, offWord) {


    var curr = offWord.substr(0,1);
  // console.log('CURRENT CHAR ',curr);
  var index = word.indexOf(curr);
  // console.log('INDEX: ',index);
  if(index === -1) return console.log('FALSE');
  word = word.substr(index+1);
  // console.log('NEW WORD', word);
  offWord = offWord.substr(1);
  // console.log('NEW offWord', offWord);
  // console.log(offWord.length);
  // console.log(offWord.indexOf(curr));
  if(word.indexOf(curr) !== -1 && offWord.indexOf(curr) === -1) return console.log('FALSE');
  if(offWord.length === 0) return console.log('TRUE');
  compare2(word, offWord);
}
}

function comapre3(word, offWord) {

}
// compare2('synchronyzed', 'snond');
module.exports = bigger;
