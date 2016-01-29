var myDict = {
  'A': 'Ay',
  'B': 'Bee',
  'C': 'Cee',
  'D': 'Dee',
  'E': 'Eee',
  'F': 'Eff',
  'A0': 'Atta',
  'B0': 'Bibbity',
  'C0': 'City',
  'D0': 'Dickety',
  'E0': 'Ebbity',
  'F0': 'Fleventy',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
}

function pronounce(str) {
  var arr = str.substr(2, str.length).split('');
  // console.log(arr);
  var newArr = [];
  var ii = 0;
  while (ii < arr.length) {
    newArr.push(arr[ii]+arr[ii+1]);
    ii += 2;
  }
  // console.log(newArr);
  var ans = '';

  for (var jj = newArr.length-1; jj >= 0; jj--) {

    if ( myDict[ newArr[jj] ] ) {
      ans = myDict[ newArr[jj] ] + ' '+ ans;
    }
    else {
      var splitStr = newArr[jj].split('');
      ans = myDict[ splitStr[1] ]+ ' '+ans;
      ans = myDict[ splitStr[0]+'0' ] + ' '+ ans;

    }
    if (jj !==0 && jj%2===1 ) {
      ans = 'bitey ' + ans;
    }
  }

console.log(str,ans);

}

pronounce('0xF5');
pronounce('0xB3');
pronounce('0xE4');
pronounce('0xBBBB');

pronounce('0xA0C9');
