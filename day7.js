// This is day 7 of "30 days JavaScript challenge"
// and today's tasks/activities are on "Objects"


// Activity 1: Object creation and access

// 1. Create an object representing a book with properties like title, author, and year.

let book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
};
console.log(book); // {title: "Atomic Habits", author: "James Clear", year: 2018}

// 2. Access the book object and get the author name, book title.
console.log("Title of the book: " + book.title); // Atomic Habits
console.log("Author of the book: " + book.author); // James Clear


// Activity 2: Object methods

// 1. Add a method to the book object that returns a string with book's title and author name.

book.info = function() {
    return this.title + " by " + this.author;
}
console.log(book.info()); // Atomic Habits by James Clear

// 2. Add a method to the book object that takes a parameter (year) and update the year of the book.

book.updateYear = function(year) {
    this.year = year;
}
book.updateYear(2020);
console.log(book.year); // {title: "Atomic Habits", author: "James


// Activity 3: Nested objects

// 1. Create a nested object representing a library with properties like name and books (an array of book objects).

let library = {
    name: "Public Library",
    books: [
        {
            title: "Atomic Habits",
            author: "james Clear",
            year: 2018
        },
        {
            title: "The Power of Habit",
            author: "Charles Duhigg",
            year: 2012
        } ]
};
console.log(library);
// console.log(library.books);

// 2. Access and log the name of thr library. and the titles of the books in the library.

console.log("Library name: " + library.name);
library.books.forEach(book => {
    console.log(book.title);
});


// Activity 4: The "this" keyword

// 1. Add a method to the book object that uses "this" to return a string with book's title and year.

book.info = function() {
    return this.title + " - " + this.year ;
}
console.log(book.info()); // Atomic Habits - 2020


// Activity 5: Object iteration

// 1. Use a for... in loop to iterate over the properties of the book object and log each property and its value.

for (let key in book) {
    console.log(key + ": " + book[key]);
}

// 2. Use Object.keys() to log all properties of the book object.

console.log(Object.keys(book)); // ["title", "author", "year"]