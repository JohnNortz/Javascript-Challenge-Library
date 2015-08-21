var method = Shelf.prototype;

var Book = require('./Book.js');


function Shelf()
{
	this.Books = Array();
}

method.addBook = function(book)
{
	this.Books.push(book);
}

method.getBook = function(bookNumber)
{
	this.Books[bookNumber].logBook();
}

method.removeBook = function(bookNumber)
{
	this.Books.splice(bookNumber, 1)
}

method.getRandBook = function()
{
	this.Books[Math.floor(Math.random() * (this.Books.length))].logBook();
}

method.allBooks = function(shelfNumber)
{
	console.log("Shelf " + shelfNumber + " contents :   ");
	console.log("....................");
	for (var i = 0; i < this.Books.length; i++)
	{
		this.Books[i].logBook();
	}
}

module.exports = Shelf;
