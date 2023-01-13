# js-oop-exercises

1. Library Collection

- Functionality:

- Constructor have these 2 properties:
•	capacity – Number
•	books – Array (empty)
At the initialization of the LibraryCollection class, the constructor accepts the capacity.

- addBook (bookName, bookAuthor): The bookName and bookAuthor are of type string. 
•	If there's not enough space in the collection for the book, error will be thrown;
•	Otherwise, this function will add the book, with the properties: bookName, bookAuthor, payed: default false, to the books array;

- payBook( bookName ):  The book is not found, error will be thrown. If the book has already paid, error will be thrown, otherwise, this function will set paid to true on the found book;

- removeBook(bookName): If the book is not found, error will be thrown, if the book hasn't paid, again error will be thrown. Otherwise, this function will remove the book from the array;

- getStatistics(bookAuthor): This method can be called with one parameter or without any. If no parameter is provided, the method should return the full information of the library: At the first line: "The book collection has "emptySlots count" empty spots left." On the lines, information about will be displayed each book, sorted alphabetically ascending, by their bookName: "{bookName} == {bookAuthor} - {Has Paid / Not Paid}." If the method is called with a parameter for bookAuthor:
•	Information about the book from the given bookAuthor will be returned: "{bookName} == {bookAuthor} - {Has Paid / Not Paid}.", if there is no such author’s book found, error will be thrown;
