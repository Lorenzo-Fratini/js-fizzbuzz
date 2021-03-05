for (var i=0;i<100;i++) {

  var num = i + 1;
  var numStr = num;

  if (num % 3 == 0) {
    numStr = 'Fizz';
  } else if (num % 5 == 0) {
    numStr = 'Buzz';
  }

  if (numStr == 'Fizz' && num % 5 == 0){
    numStr += 'Buzz';
  }

  console.log(numStr);
}
