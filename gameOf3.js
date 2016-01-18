function main(input) {
  if (input === 1) {
    console.log(1);
  }
  else {
    if (input % 3 !== 0) {
        var plus = input +1 ;
        var minus = input - 1;
      if (plus % 3 === 0) {
        console.log(input + ' 1');
        main(plus/3);
      }
      else {
        console.log(input + ' -1');
        main(minus/3);
      }
    }
    else {
      console.log(input + ' 0');
      main(input/3);
    }
  }
}

// main(100);
// main(31337357);

module.exports = main;
