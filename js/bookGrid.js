function bookGrid(arr) {
	let tmpObj = arr[arr.length - 1];
	let tempGrid = document.getElementById("book-grid");
	tempGrid.innerHTML += /*html*/ `
        <div class="book-card" id="book-${arr.indexOf(
					tmpObj
				)}" data-index="${arr.indexOf(tmpObj)}">
            <h3>Title of the book: <br> ${tmpObj.title}</h3>
            <br><br>
            <h3>Author: <br> ${tmpObj.author}</h3>
            <br><br>
            <h3>Number of pages: <br> ${tmpObj.pages}</h3>
            <br><br>
            <h3>${tmpObj.info()}</h3>
            <button 
                onclick="deleteBook(event)" 
                class="delete-button" 
                id="delete-${arr.indexOf(tmpObj)}"
                data-index="${arr.indexOf(tmpObj)}"
                >
                    Delete
                        </button>
        </div>
    `;
}

function deleteBook(event) {
	event.preventDefault();
	let source = event.srcElement;
	let index = source.dataset.index;
	myLibrary.splice(index, 1);
	let bookIndex = `book-${index}`;
	let deletedBook = document.getElementById(bookIndex);
	deletedBook.remove();
}
