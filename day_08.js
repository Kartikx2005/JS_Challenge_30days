// ES6+ Features

// Activity 1 : Template Literals

// Task - 1
let name = "Kartik";
let age = 19;
const str = `My name is ${name}, and i am ${age} years old`;
console.log(str);

// Task - 2
const str2 = `This is a \n multi line \n string`;
console.log(str2);

// Activity 2 : Destructuring

// Task - 3
const arr = [1, 2, 3, 4, 5];
const [a, b] = arr;
console.log(a);
console.log(b);

// Task - 4
const book = {
  title: "Hello World",
  author: "Sam",
};
const { title } = book;
console.log(`The book title is ${title}`);
const { author } = book;
console.log(`The book author is ${author}`);

// Activity 3 : Spread and Rest Operators

// Task - 5
const num = [1, 2, 3, 4, 5];
const num2 = [...num, 6, 7, 8];
console.log(num2);

// Task - 6
function func(...input) {
  sum = 0;
  for (let i of input) {
    sum += i;
  }
  console.log(sum);
}
func(1, 2, 3, 4, 5);

// Activity 4 : Default Parameters

// Task - 7
function prod(a, b) {
  if (b === undefined) {
    b = 1;
  }
  return a * b;
}
console.log(prod(3, 4));
console.log(prod(4));

// Activity 5 : Enhanced Object Literals

// Task - 8
const lib = {
    book: "Hello World",
    author: "Sam",
    str : function(){
        return `Book name is ${lib.book} and author is ${lib.author}`
    }
}
console.log(lib.str())

// Task - 9
const x = 10
const y = 20
const num3 = {
    x,
    y
}
console.log(num3)
