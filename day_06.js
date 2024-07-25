// Arrays

// Activity 1 : Array Creation and Access

// Task - 1
const num = [1, 2, 3, 4, 5];
console.log(num);

// Task - 2
console.log(num[0]);
console.log(num[num.length - 1]);

// Activity 2 : Array Methods (Basic)

// Task - 3
num.push(3);
console.log(num);

// Task  - 4
num.pop();
console.log(num);

// Task - 5
num.shift();
console.log(num);

// Task - 6
num.unshift(9);
console.log(num);

// Activity 3 : Array Methods (Intermediate)

// Task - 7
const num2 = num.map(double);
function double(num) {
  return num * 2;
}
console.log(num2);

// Task - 8
const num3 = num.filter(even);
function even(num) {
  return num % 2 == 0;
}
console.log(num3);

// Task - 9
const arr1 = [1,2,3,4,5]
const sum = arr1.reduce(
  (acc, cv) => acc + cv, 0
)
console.log(sum)

// Activity 4 : Array Iteration

// Task - 10
const arr = [1, 2, 3, 4, 5, 6];
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Task - 11
console.log(arr.forEach(myfunction));
function myfunction(num) {
  console.log(num);
}

// Activity 5 : Multi - dimensional array

// Task - 12
const md = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(md)

// Task - 13
console.log(md[0][1])