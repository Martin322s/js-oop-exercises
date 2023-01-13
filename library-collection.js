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
}