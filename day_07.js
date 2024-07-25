// Objects

// Activity 1 : Object Creation and Access

// Task - 1
const book = {
    title : "theory of silicon",
    author : "James Smith",
    year : 2019
}
console.log(book)

// Task - 2
console.log(book.title)
console.log(book.author)

// Activity 2 : Object Methods

// Task - 3
book.str = function(){
    console.log(`Book name is ${book.title} and author is ${book.author}`)
}
book.str()

// Task - 4
book.uyear = function(year){
    book.year = year;
}
book.uyear(2005)
console.log(book)

// Activity 3 : Nested Objects

// Task - 5
const lib = {
    name : "Kaveri",
    books : {
        book1 : "theory of silicon",
        book2 : "hello world",
        book3 : "clash of clans",
    }
}

// Task - 6
console.log(`Library name is ${lib.name} and books titles are ${Object.values(lib.books)}`)

// Activity 4 : The this keyword

// Task - 7
book.func = function(){
    console.log(`Book name is ${this.title} and publication year is ${this.year}`)
}
book.func();

// Activity 5 : Object Iteration
// Task - 8
for(let key in book){
    console.log(`Property is ${key} and value is ${book[key]}`)
}

// Task - 9
console.log(Object.keys(book))
console.log(Object.values(book))
