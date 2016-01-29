function fizzbuzz(n){
  var resultArray = [];
  var i = 0;
  while(i<n){
    i++;
    if(i%3===0){
      if(i%5===0){
        resultArray.push('fizzbuzz');
      } else{
        resultArray.push('fizz');
      }
    } else if(i%5===0){
      resultArray.push('buzz');
    } else{
      resultArray.push(i);
    }
  }
  return resultArray;
}
function fizzbuzz2(n){
  var resultArray = [];
  var i = 0;
  while(i<n){
    i++;
    var f = i%3==0;
    var b = i%5==0;
    f ? b ? resultArray.push('fizzbuzz') : resultArray.push('fizz') : resultArray.push('buzz') : i;
  }
  return resultArray;
}
