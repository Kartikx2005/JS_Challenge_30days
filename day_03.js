"use strict";
// Control Structures

// Activity 1 : if-else statements

// Task - 1
let a = 10;
if (a > 0) {
  console.log("a is positive");
} else if ((a = 0)) {
  console.log("a is zero");
} else {
  console.log("a is negative");
}

// Task - 2
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote !");
} else if (age < 18 && age > 0) {
  console.log("You are not eligible to vote !");
} else {
  console.log("You have entered the wrong age !");
}

// Activity 2 : Nested is-else statement

// Task - 3
let x = 10;
let y = 20;
let z = 30;
if (x > y) {
  if (x > z) {
    console.log("x is maximum");
  } else {
    console.log("z is maximum");
  }
} else {
  if (y > z) {
    console.log("y is maximum");
  } else {
    console.log("z is maximum");
  }
}

// Activity 3 : Switch Case
// Task - 4

let n = 5;
switch (n) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Wrong Input !!");
}

// Task - 5
let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Fair");
    break;
  case "D":
    console.log("Poor");
    break;
  case "E":
    console.log("Fail");
    break;
  default:
    console.log("Invalid Grade");
}

// Activity 4 : Conditional (Ternary) Operator

// Task - 6
n = 10
let r = n%2 == 0 ? "Even" : "Odd"
console.log(r)

// Activity 5 : Combining Conditions

// Task - 7
let year = 1900
if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("It is a leap year !")
        }
        else{
            console.log("It is not a leap year !")
        }
    }else{
        console.log("It is a leap year !")
    }
}else{
    console.log("It is not a leap year !")
}