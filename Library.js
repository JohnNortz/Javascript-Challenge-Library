var method =  Library.prototype;

function Library()
{
this._Shelves = Array();
}

var Shelf = require('./Shelf.js');
var Book = require('./Book.js');

method.newShelf = function()
{
	//console.log('new shelf created');
	var shelf = new Shelf();
	this._Shelves.push(shelf);
}

method.removeShelf = function(shelfNumber)
{
	//console.log('Removing shelf number ' + shelfNumber);
	this._Shelves.splice(shelfNumber, 1);
}

method.allBooks = function()
{
	//console.log('All Books should be printed...');
	for (var i = 0; i < this._Shelves.length; i++)
	{
		this._Shelves[i].allBooks(i);
	}
}

method.getBookFromShelf = function(shelfNumber, bookNumber)
{
	console.log('Getting single book...');
	this._Shelves[shelfNumber].getBook(bookNumber);
}

method.addToShelf = function(title, author, shelfNumber)
{
	//console.log('Adding to shelf...');
	var book = new Book(title, author);
	this._Shelves[shelfNumber].addBook(book);
}

method.removeFromShelf = function(shelfNumber, bookNumber)
{
	//console.log('Removing from shelf...');
	this._Shelves[shelfNumber].removeBook(bookNumber);
}

method.getRandomBook = function()
{
	//console.log('Getting Random Book');
	var shelfNum = (Math.floor( Math.random() * (this._Shelves.length) ));                                        // gets random shelf, then random book from that shelf   v
	this._Shelves[shelfNum].getRandBook();
}


module.exports = Library;
