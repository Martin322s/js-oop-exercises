# js-oop-exercises

1. Library Collection

Functionality

- Constructor have these 2 properties:
•	capacity – Number
•	books – Array (empty)
At the initialization of the LibraryCollection class, the constructor accepts the capacity.

- addBook (bookName, bookAuthor): The bookName and bookAuthor are of type string. 
•	If there's not enough space in the collection for the book, error will be thrown;
•	Otherwise, this function will add the book, with the properties: bookName, bookAuthor, payed: default false, to the books array;

- payBook( bookName ):  The book is not found, error will be thrown. If the book has already paid, error will be thrown, otherwise, this function will set paid to true on the found book;

removeBook(bookName) 
•	If the book is not found, throw an Error:
"The book, you're looking for, is not found."
•	If the book hasn't paid, throw an Error:
"{bookName} need to be paid before removing from the collection."
•	Otherwise, this function should remove the book from the array and return:
"{bookName} remove from the collection."

getStatistics(bookAuthor)
This method can be called with one parameter or without any.
 If no parameter is provided, the method should return the full information of the library 
•	At the first line:
"The book collection has { emptySlots } empty spots left."
•	On the lines, display information about each book, sorted alphabetically ascending, by their bookName:
"{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
If the method is called with a parameter for bookAuthor:
•	Return only the information about the book from the given bookAuthor:
"{bookName} == {bookAuthor} - {Has Paid / Not Paid}."
•	If there is no such author’s book found, throw an Error:
"{bookAuthor} is not in the collection."
