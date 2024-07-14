"use strict";
// Variables and Data Types

// Activity 1 : Variable Declaration

// Task - 1
var num1 = 10;
console.log(num1)

// Task - 2
let str = "Kartik"
console.log(str)

// Activity 2 : Constant Declaration

// Task - 3
const pi = 3.14
console.log(pi)

// Activity 3 : Data Types

// number
let a = 10
console.log(typeof(a))

// string
let b = "Kartik"
console.log(typeof(b))

// boolean
let c = true
console.log(typeof(c))

// object
let d = {
    name: "Kartik",
    age: 19,
    gender: "Male"
}
console.log(typeof(d))

// array
let e = [1,2,3,4,5]
console.log(typeof(e)) // object 
// all derived data types in js is object 

// Activity 4 : Reassigning Variables 
let z = 14;
console.log(`Initial value of z is ${z}`)
z = 28;
console.log(`Reassigned value of z is ${z}`)

// Activity 5 : Understanding const 

const x = 10;
// x = 20; --> Error (Assignment to constant variable)
console.log(x)