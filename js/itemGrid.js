function itemGrid(arr) {
    let tmpObj = arr[arr.length - 1];
    let tempGrid = document.getElementById("list-grid");
    tempGrid.innerHTML += /*html*/ `
        <div class="item-card" id="item-${arr.indexOf(
        tmpObj
    )}" data-index="${arr.indexOf(tmpObj)}">
            <h3>Task: <br> ${tmpObj.title}</h3>
            <br><br>
            <h3>description: <br> ${tmpObj.description}</h3>
            <br><br>
            <button 
                onclick="deleteItem(event)" 
                class="delete-button" 
                id="delete-${arr.indexOf(tmpObj)}"
                data-index="${arr.indexOf(tmpObj)}"
                >
                    Done! <i class="fas fa-check"></i>
            </button>
        </div>
    `;
}

function deleteItem(event) {
    event.preventDefault();
    let source = event.srcElement;
    let index = source.dataset.index;
    myList.splice(index, 1);
    let itemIndex = `item-${index}`;
    let deletedItem = document.getElementById(itemIndex);
    deletedItem.remove();
}
