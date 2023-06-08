let myList = [];

//listItem factory function
const listItemFactory = (title,description) => {return {title, description}};

//function to list items
function addItemToList(event) {
	event.preventDefault();
	let title = document.getElementById("title").value;
	let description = document.getElementById("description").value;
	let tmpItem = listItemFactory(title, description);
	if (title != "" && description != "") {
		myList.push(tmpItem);
		document.getElementById("title").value = "";
		document.getElementById("description").value = "";
		toggleItemForm(event);
		itemGrid(myList);
	} else {
		alert("please fill the required information");
	}
}
