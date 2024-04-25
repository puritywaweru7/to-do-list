//IIF
(() => {
    let toDoListArray = [];
    //UI variables
    const form = document.querySelector(".form");
    const input = document.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    //eventlisteners
    form.addEventListener("submit", (e) => {
        e.preventDefault(); //prevent default behaviour
        let itemId = String(Date.now()); //give item a unique id
        let toDoItem = input.value; //assign input value
        //pass Id and item into functions
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);

        //clear inputbox 
        input.value = "";
    });
    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if (!id) return;
        //pass id through to functions
        remeveItemFromDOM(id);
        removeItemFromArray(id);       
    });

    //fuctions
    function addItemToDOM(itemId, toDoItem) {
        //create list items
        const li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        //add toDoItem text to li
        li.innerText = toDoItem;
        //add li to the DOM
        ul.appendChild(li); 
    }

    function addItemToArray(itemId, toDoItem){
        toDoListArray.push({itemId, toDoItem});
        console.log(toDoListArray)
    }

    function remeveItemFromDOM(id) { //remove from dom
        //get the list item by data Id
        var li = document.querySelector('[data-id="' + id + '"]');
        //remove list item
        if (li) {
            ul.removeChild(li);
        }
    }
    

    function removeItemFromArray(id) {
        //create a new toDoListArray with all list items that dont match the Id
        toDoListArray = toDoListArray.filter((item) => item.itemId !== id);
        console.log(toDoListArray);
    }
})();
