var input = [
  '2/13/15',
  '1-31-10',
  '5 10 2015',
  '2012 3 17',
  '2001-01-01',
  '2008/01/07'
]

function convertDate(dateArray) {
  var dates = [];
  var results = [];
  for (var ii = 0; ii < dateArray.length; ii ++){
    dates.push( new Date(dateArray[ii]));
  }
  for (var jj = 0; jj < dates.length; jj ++) {
    results.push(dates[jj].toISOString().substring(0,10));
  }
  return results;
}

var convertedDates = convertDate(input);
console.log(convertedDates);
