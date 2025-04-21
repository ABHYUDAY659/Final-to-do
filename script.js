// Selectors

const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

// Event Listener

todoButton.addEventListener('click' , addTodo);
todoList.addEventListener('click' , deleteCheck);


// functions

function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // TOdo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
     trashButton.classList.add("trash-btn");
     todoDiv.appendChild(trashButton);
     //Append to list
     todoList.appendChild(todoDiv);
     //Clear Todo Input value

     todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0] ==="trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    //check mark 
    if(item.classList[0] ==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}