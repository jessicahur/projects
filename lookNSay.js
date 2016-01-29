function main(N, seed) {
  var n = N;
  var input = '';
  while (n > 0){
    if (n !== N) {
      input = say(input);
    }
    else {
      input = say(seed.toString());
    }
    n--;
  }
  console.log(input);
}

function say(str){
  var splitStr = str.split('');
  var output = '';
  var count = 0;

  for (var ii = 0; ii < splitStr.length; ii++){
    var current = splitStr[ii];
    var next = splitStr[ii+1];
    count ++;

    if (next) {
      if (next != current){
        output += count + current;
        count = 0;//reset count
      }
    }
    else {
      output += count + current;
      count = 0;
    }
  }//end of for loop
  return output;
}

if(process.argv.length === 4){
  var output = main(process.argv[2], process.argv[3]);
}
