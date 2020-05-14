// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

class Book {
    constructor(title, author, genre, read, startReadDate, endReadDate)
    {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.read = true || false;
    this.startReadDate = startReadDate || null;
    this.endReadDate = endReadDate || null;
    
    }
}

const book1 = new Book("Wilderness Seasons", "Ian Wilson", "Non-fiction")
const book2 = new Book("Slaughterhouse 5", "Kurt Vonnegaut", "Science Fiction")
const book3 = new Book("The Adventures of Huckleberry Finn", "Mark Twain", "Fiction")
const book4 = new Book("Animal Farm", "George Orwell", "Fiction")
const book5 = new Book("Lord of the Flies", "William Golding", "Fiction")
console.log(book1, book2, book3, book4, book5);