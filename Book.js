var method = Book.prototype;

function Book(title, author)
{
	this._title = title;
	this._author = author;

}

method.logBook = function()
{
	console.log("Title: " + this._title + ". Author: " + this._author)
}
module.exports = Book;