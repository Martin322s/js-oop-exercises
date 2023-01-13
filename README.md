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

2. Camping

- Functionality:

- Constructor have these 4 properties:
•	organizer - string
•	location - string
•	priceForTheCamp - {"child": 150, "student": 300, "collegian": 500}
•	listOfParticipants - empty array
At the initialization of the SummerCamp class, the constructor accepts the organizer and location.

- registerParticipant (name, condition, money): This method register participant to the camping.  If the given condition of participants, is not present in priceForTheCamp object with the specified default values ("child", "student", "collegian"), an error with the following message will be thrown. If the name of the current participant is already present in listOfParticipants array, message will be returned. If the submitted money is less than the price for the stay in the camp, return the following message:`The money is not enough to pay the stay at the camp.`. Otherwise, will add the participant, with properties: {name, condition, power: default 100, wins: default 0} to the listOfParticipants array;

- unregisterParticipant (name): This method removes a participant from the camping. The method accepts 1 argument - name (string). If the name of the current participant is not present in listOfParticipants array, an error will be thrown. Otherwise, this function will remove the participant from the listOfParticipants array;

- timeToPlay (typeOfGame, participant1, participant2): Method can take 2 or 3 arguments depending on the type of game: typeOfGame (string), ,participant1 - name(string), participant2 - name(string) - optional. There are two possible types of games: WaterBalloonFights -> you will get two players, Battleship -> you will get one player. If any of the submitted participants names are not present in listOfParticipants array, an error will be thrown. If two names are submitted, check that the participants' condition matches, if not matched, an error will be thrown. If the type of game is Battleship increase the power property of the participant by a value of 20. If the type of game is WaterBalloonFights, it will check whether the value of the power of one participant is greater than the value of the power of the other participant, and in this case increase the value of the wins property by one per winner (with the bigger power). Otherwise, the function returns the message: `There is no winner.`

- toString (): At the first line: `{organizer} will take {numberOfParticipants} participants on camping to {location}`, On the lines, display information about each participant, sorted in descending order by their wins in the following format: `{name} - {condition} - {power} - {wins}`;
