let myLibrary = [];

//book constructor
class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
		this.info = function () {
			if (read) {
				return "already readed";
			} else {
				return "not read yet";
			}
		};
	}
}

//function to add books
function addBookToLibrary(event) {
	event.preventDefault();
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let readed = document.getElementById("readed").checked;
	let tmpBook = new Book(title, author, pages, readed);
	if (title != "" && author != "" && pages != "") {
		myLibrary.push(tmpBook);
		document.getElementById("title").value = "";
		document.getElementById("author").value = "";
		document.getElementById("pages").value = "";
		toggleBookForm(event);
		bookGrid(myLibrary);
	} else {
		alert("please fill the required informatión");
	}
}
