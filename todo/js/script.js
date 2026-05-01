// ===STATE===
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentfilter = "all";

const addbtn = document.getElementById("addbtn");
const todolist = document.getElementById("todolist");
const filters = document.querySelectorAll(".fbtn");
const emptystate = document.getElementById("emptystate");
const todoinput = document.getElementById("todoinput");

function savetodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function rendertodos(){
    todolist.innerHTML = "";
    
    let filteredtodos = todos
        .map((todo, index) => ({ todo, index }))
        .filter(item => {
            if(currentfilter === "completed") return item.todo.completed;
            if(currentfilter === "incomplete") return !item.todo.completed;
            return true;
        });

    if(filteredtodos.length === 0){
        emptystate.classList.remove("hidden");
    } else {
        emptystate.classList.add("hidden");
    }

    filteredtodos.forEach(item => {
        let li = document.createElement("li");

        if(item.todo.completed){
            li.classList.add("completed");
        }
        li.innerHTML= `
        <span>${item.todo.text}</span>
        <button onclick = "togglestatus(${item.index})">YES</button>
        <button onclick = "edittodo(${item.index})">EDIT</button>
        <button onclick = "deletetodo(${item.index})">DELETE</button>
        `;

        todolist.appendChild(li);
    });
}


addbtn.addEventListener("click", () => {
    const text = todoinput.value.trim();
    if(!text) return;

    todos.push({
        text, completed: false
    });

    todoinput.value = "";
    savetodos();
        rendertodos();
});

function togglestatus(index){
    todos[index].completed = !todos[index].completed;
    savetodos();
    rendertodos();
}

function edittodo(index){
    const newtext = prompt("Edit Task", todos[index].text);
    if(!newtext) return;
    const trimmed = newtext.trim();
    if(!trimmed) return;
    todos[index].text = trimmed;
    savetodos();
    rendertodos();
}

function deletetodo(index){
    todos.splice(index, 1);
    savetodos();
    rendertodos();
}

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".fbtn.active").classList.remove("active");
        btn.classList.add("active");

        currentfilter = btn.dataset.filter;
        rendertodos();
    });
});

rendertodos();