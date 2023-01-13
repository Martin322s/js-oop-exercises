class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        this.books.push({ bookName, bookAuthor, payed: false, });

        if (this.books.length > this.capacity) {
            throw Error('Not enough space in the collection.');
        }

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        const bookToPay = this.books.find(book => book.bookName === bookName);
        if (!bookToPay) {
            throw Error(`${bookName} is not in the collection.`);
        }

        if (bookToPay.payed) {
            throw Error(`${bookName} has already been paid.`);
        }

        bookToPay.payed = true;
        return `${bookName} has been successfully paid.`;
    }
}