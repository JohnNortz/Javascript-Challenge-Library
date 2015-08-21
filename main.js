var main = function()
{
	var Library = require('./Library.js');
	var library = new Library();
	library.newShelf();
	library.newShelf();
	library.newShelf();
	library.addToShelf("Leviathan Wakes", "James S. A. Corey", 0);
	library.addToShelf("The Long Earth", "Stephen Baxter and Terry Pratchett", 0);
	library.addToShelf("The Martian", "Andy Weir", 0);
	library.addToShelf("Harry Potter and the Goblet of Fire", "", 1);
	library.addToShelf("The Lord of the Rings: The Fellowship of the Ring", "J.R.R. Tolken", 2);
	library.addToShelf("A Game of Thrones:  A Clash of Kings", " George R. R. Martin", 2);
	library.addToShelf("Do Androids Dream of Electric Sheep", "Phillip K. Dick", 2);
	library.addToShelf("Othello", "William Shakespear", 2);

	library.getBookFromShelf(2, 3);
	library.addToShelf("Ender's Game", "Orson Scott Card", 1);
	library.removeFromShelf(2, 1);

	library.allBooks();
	library.getRandomBook();
}

var Main = new main();

