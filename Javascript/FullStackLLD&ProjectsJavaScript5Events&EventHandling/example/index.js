const todoRef = document.querySelector("input.todo");

let todolist = []
todoRef.addEventListener("keyup", function(e){
    e.preventDefault();
    console.log(e.target.value)
    if (e.key === "Enter"){
        todolist.push(e.target.value)
    }
    console.log(todolist)
    if (e.key === "Shift"){
        todolist.pop()
    }
});
