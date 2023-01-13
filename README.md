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

3. Resturant

- Constructor have 4 properties: budgetMoney - number, menu - object, stockProducts - object, history - array. At initialization of the Restaurant class, the constructor accepts only the budget! The rest of the properties are empty!

Functionality: 

- loadProducts(): Accept 1 argument products (array from strings). Every element into this array is information about product in format:
"{productName} {productQuantity} {productTotalPrice}". They are separated by a single space. This method appends products into our products in stock (stockProducts) under the following circumstances: If the budget allows us to buy the current product, we add it to stockProducts keeping the name and quantity of the meal and we deduct the price of the product from our budget. If the current product already exists into stockProducts just add the new quantity to the old one And finally, whether or not we have added a product to stock or not, we record our action in the history: If we were able to add the current product: "Successfully loaded {productQuantity} {productName}", If we not: "There was not enough money to load {productQuantity} {productName}". This method must return all actions joined by a new line!

- addToMenu(): Accept 3 arguments meal (string), needed products (array from strings) and price (number). Every element into needed products is in format: "{productName} {productQuantity}" They are separated by a single space! If the meal is not in our menu, appends a meal into object menu. Must have properties products and price! Check how many meals have in menu and returns one of the following messages: 
-	One meal: "Great idea! Now with the {meal} we have 1 meal in the menu, other ideas?"
-	Zero, Two or more meal:"Great idea! Now with the {meal} we have {the number of all meals in the menu} meals in the menu, other ideas?". Otherwise, if we already have this meal return the message: "The {meal} is already in the our menu, try something different."

- showTheMenu(): This method just return all meals from our menu separated by a new line in format: {meal} - $ {meal price}. If our menu is empty, just return the message: "Our menu is not ready yet, please come later..."

- makeTheOrder(): Accept 1 argument meal (string). This method searches the menu for a certain meal. If we do not have the given meal, return the following message:
"There is not {meal} yet in our menu, do you want to order something else?", Otherwise, if we have this meal in the menu, we need to check if we have the needed products to make it! If we do not have all needed products for this meal. If we have this meal in the menu and also, we have all needed products to make it. You also need to reduce quantity of all used products from those in stock and add the price of the meal to the total budget.

