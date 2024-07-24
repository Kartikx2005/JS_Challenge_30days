// Loops

// Activity 1 : For Loop

// Task - 1
let i = 0;
for (i = 1; i < 11; i++) {
  console.log(i);
}

// Task - 2
let r = 0;
for (i = 1; i < 11; i++) {
  r = i * 5;
  console.log(`5 x ${i} = ${r}`);
}

// Activity 2 : While Loop

// Task - 3
i = 1;
let sum = 0;
while (i < 11) {
  sum += i;
  i++;
}
console.log(`The sum of no from 1 to 10 is ${sum}`);

// Task - 4
i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// Activity 3 : Do while Loop

// Task - 5
i = 1;
do {
  console.log(i);
  i++;
} while (i < 6);

// Task - 6
i = 5;
r = 1;
if (i < 0) {
  console.log("Factorial of negative no is not defined");
} else {
  do {
    r *= i;
    i--;
  } while (i > 0);
  console.log(`The factorial of 5 is ${r}`);
}

// Activity 4 : Nested Loops

let n = 5;
for (let i = 1; i <= n; i++) {
    let str = "* ";
    console.log(str.repeat(i));
}

