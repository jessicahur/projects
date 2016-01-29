var dict = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000
};

function convert(str) {
  var components = str.split('');
  var result = 0;
  var ii = 0;
  while (ii < components.length){
    var current = components[ii];
    var next = components[ii+1];
    // console.log(dict[current], dict[next] );
    if (dict[next] !== undefined) {
      if (dict[current] >= dict[next]){
        result += dict[current];
        ii ++;
      }
      else {
      // console.log('RAN');
        result += dict[next] - dict[current];
        ii +=2;
      }
    }
    else{
      result += dict[current];
      ii++;
    }
  }
console.log(result);
}


convert('I');
convert('IX');
convert('III');
convert('IV');
convert('V');
convert('XLIV');
convert('XXXIV');
convert('XIX');
convert('MMMMCMXCIX');
