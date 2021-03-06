//START NEW TO DO LIST
function createNewList() {
    const intro = document.querySelector("#intro");
    const toDo = document.querySelector("#to-do"); 
    intro.classList.add("fadeOut");
    toDo.classList.add("fadeIn");
}

// ADD NEW TASK
//Select DOM
let input = document.querySelector("#input");
let tasks = document.querySelector("#tasks");

//EVENT LISTENER
input.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
        addToDo();
    }
});

function addToDo() {
    //REMOVE WHITE SPACES FROM THE TEXT
    let trimmedInput = input.value.trim();

    //RESTORE INPUT 
    input.style.backgroundColor="white";
    //CREATE LIST  
    if (trimmedInput.length > 0) { 
        let todo = document.createElement("li");
        todo.innerHTML = `
            <div class="todo">
            <div class="item">${trimmedInput}</div>
            <div class="itemOptions">
            <button class="check" type="check"  onclick="checkToDo(this);"><i class="fas fa-check"></i></button>
            <button class="delete" type="trash" onclick="deleteToDo(this);"><i class="fas fa-trash"></i></button>
            </div>`;          
        todo.classList.add("todo");
        tasks.appendChild(todo);
        input.value =" ";
    }else{
    //ALERT WHEN NO TEXT  
    input.style.backgroundColor="pink";
    input.placeholder="Don't forget to type in a task!";
  }
}

//CHECK TODO
function checkToDo(button) {
    const item = button.parentElement.previousElementSibling;
    item.classList.toggle("completed");
}

//DELETE TODO
function deleteToDo(button) {
    const todo = button.parentElement.previousElementSibling.parentElement;
    todo.remove();
}
