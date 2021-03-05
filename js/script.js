// console.log('Here');

// metodo 1
for (var i=0;i<100;i++) {

  var num = i + 1;

  if (num % 3 == 0 && num % 5 == 0) {
    num = 'FizzBuzz'
  }

  if (num % 3 == 0) {
    num = 'Fizz';
  } else if (num % 5 == 0) {
    num = 'Buzz';
  }

  console.log(num);
}

// metodo 2
