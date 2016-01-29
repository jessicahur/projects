
function checkChars (stringInput){
  var current = '';
  var prev = '';
  var next = '';
  var nextNext = '';
  var middle = '';
  var result = [];
  var temp = '';
  var ii = 0;
  while (ii<stringInput.length-2){
    current = stringInput[ii];
    next = stringInput[ii+1];
    nextNext = stringInput[ii+2];
    if (current === nextNext){
      prev = stringInput[ii-1];
      temp = current+next+nextNext;
      result.push(temp);
      ii++;
      current = next;
      next = stringInput[ii+1];
      nextNext = stringInput[ii+2];
      if(prev === nextNext){
        temp = stringInput.substring(ii-2, ii+3);
        result.push(temp);
      }
    }
    else if (next === nextNext){
      prev = current;
      current = next+nextNext;
      next = stringInput[ii+2];
      nextNext = stringInput[ii+3];
      if (prev === nextNext){
        temp = prev+current+nextNext;
        result.push(temp);
      }
      ii++;
    }
    ii++;
  }
  return result;
}

var test = checkChars('xabac');
console.log('test',test);
var test1 = checkChars('abbaxcd');
console.log('test1', test1);
var test2 = checkChars('dacxcabbbca');
console.log('test2', test2);
var test3 = checkChars('eacbcakf');
console.log('test3', test3);
// var test4 = checkChars('acbcakf');
// console.log('test4', test4);
function pickRepeat(string){
  var current = '';
  var next = '';
  var temp = '';
  var repeat = [];
  for (var ii=0; ii<string.length-1; ii++){
    current = string[ii];
    temp = current;
    next = string[ii++];
    if (current === next){
      temp += next;
    }
    else {
      if (temp.length > 1) repeat.push(temp);
      temp = '';
    }
  }
  return repeat;
}
// var a = 'accbdd';
// var b = pickRepeat(a);
// console.log('b', b);

function checkChars2 (string) {

}
