// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.


class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read || false;
        this.startReadDate = startReadDate || null;
        this.endReadDate = endReadDate || null;
    }
}

class BookList {
    constructor() {
        this.read = 0;
        this.unread = 0;
        this.upNext = null;
        this.currentlyReading = null;
        this.lastRead = null;
        this.books = []
    }

    add = (book) => {
        this.books.push(book);
        if (book.read) {
            this.read += 1;
        } else {
            this.unread += 1;
        }
    }
}

const homeLibrary = new BookList();


homeLibrary.add(new Book("Wilderness Seasons", "Ian Wilson", "Non-fiction"))
homeLibrary.add(new Book("Slaughterhouse 5", "Kurt Vonnegaut", "Science Fiction"))
homeLibrary.add(new Book("The Adventures of Huckleberry Finn", "Mark Twain", "Fiction"))
homeLibrary.add(new Book("Animal Farm", "George Orwell", "Fiction"))
homeLibrary.add(new Book("Lord of the Flies", "William Golding", "Fiction"))

console.log(homeLibrary);