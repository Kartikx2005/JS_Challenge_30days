// Functions

// Activity 1 : Function Declaration

// Task - 1
function evenodd(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
evenodd(5);

// Task - 2
function square(num) {
  console.log(num * num);
}
square(2);

// Activity 2 : Function Expression

// Task - 3
function max(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater then ${num2}`);
  } else if (num1 == num2) {
    console.log("Both are same");
  } else {
    console.log(`${num2} is greater then ${num1}`);
  }
}
max(1, 8);

// Task - 4
function concat(str1, str2) {
  console.log(str1 + str2);
}
concat("Hello ", "World");

// Activity 3 : Arrow Functions

// Task - 5
const add = (num1, num2) => console.log(num1 + num2);
add(3, 4);

// Task - 6
const check = (string, str) => (string.includes(str) ? "Yes" : "No");
console.log(check("Hello World", "World"));

// Activity 4 : Function Parameters and Default Values

// Task - 7
function multi(num1, num2) {
  if (num2 == undefined) {
    num2 = 10;
  }
  console.log(num1 * num2);
}

multi(2, 3);

// Task - 8
function greeting(name, age) {
  if (age == undefined) {
    age = 19;
  }
  console.log(`Hello! ${name}, Your age is ${age}`);
}
greeting("Kartik", 19);

// Activity 5 : Higher-Order Functions

// Task - 9
function high(low, num) {
  for (let i = 0; i < num; i++) {
    low();
  }
}
function low() {
  console.log("Hello World");
}
high(low, 5);

// Task - 10
function func(one, two, num) {
  let sec = one(num);
  return two(sec);
}
function one(num) {
  return ++num;
}
function two(num) {
  return ++num;
}
console.log(func(one, two, 2));
