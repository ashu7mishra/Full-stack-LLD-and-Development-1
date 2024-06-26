const openModelButtonRef = document.querySelector(".quick-action .icon.add");
const modelRef = document.querySelector(".model");
const closeModelButtonRef = document.querySelector(
  ".model .right-section .close"
);
const textareaRef = document.querySelector(".model textarea");
const priorityBoxesRef = document.querySelector(".model .right-section .box");
const ticketSectionRef = document.querySelector('.ticket-section');
const deleteDivRef = document.querySelector('.quick-action .icon.delete');
const deleteIconRef = document.querySelector('.quick-action .icon.delete .fa-trash');
const priorityFilterRef = document.querySelector('.priority-filter')
const clearFilterRef = document.querySelector('.clear-filter');

let tasks;

function initializeLocalStorage(){
  const tasks = getTasksFromLocalStorage();
  if (!tasks){
    updateTasksInLocalStorage([
      {
        id: (new ShortUniqueId())(),
        description: "task 1",
        priority: "p1",
      },
      {
        id: (new ShortUniqueId())(),
        description: "task 2",
        priority: "p2",
      },
      {
        id: (new ShortUniqueId())(),
        description: "task 3",
        priority: "p3",
      }
    ]);
    tasks = getTasksFromLocalStorage();
  }

}

initializeLocalStorage();

// const tasks = [
//   {
//     id: "1",
//     description: "task 1",
//     priority: "p1",
//   },
//   {
//     id: "2",
//     description: "task 2",
//     priority: "p2",
//   },
//   {
//     id: "3",
//     description: "task 3",
//     priority: "p3",
//   }
// ];

const newTask = {
  id: "",
  description: "",
  priority: "",
};

function openModel() {
  modelRef.classList.remove("hide");
}

function closeModel() {
  modelRef.classList.add("hide");
}

openModelButtonRef.addEventListener("click", function () {
  const isHideClassApplied = [...modelRef.classList].includes("hide");
  if (isHideClassApplied) {
    openModel();
  } else {
    closeModel();
  }
});

closeModelButtonRef.addEventListener("click", function () {
  closeModel();
});

textareaRef.addEventListener("keyup", function (ev) {
  if (ev.key == "Shift") {
    // TODO: append to list
    const description = ev.target.value;
    const priority = getSelectedClassPriority();
    var uid = new ShortUniqueId();
    console.log(description, priority);
    tasks.push({
      id: uid(),
      description: description,
      priority: priority,
    });
    console.log(tasks);
    listTickets(tasks);
    updateTasksInLocalStorage(tasks);
    closeModel();
  }
});

function getSelectedClassPriority() {
  let priority = "";
  priorityBoxesRef.forEach(function (singleBoxRef, idx) {
    if ([...singleBoxRef.classList].includes("selected")) {
      priority = `p${idx + 1}`;
    }
  });
  return priority;
}

function removeSelectedClassFromBox() {
  priorityBoxesRef.forEach(function(singleBoxRef) {
    singleBoxRef.classList.remove("selected");
  });
}

function addSelectedClassToCurrentBox(boxRef) {
  boxRef.classList.add("selected");
}

priorityBoxesRef.forEach(function(boxRef) {
    boxRef.addEventListener('click', function(ev) {
        // remove selected class from all box
        removeSelectedClassFromBox();
        // add selected class to current box
        addSelectedClassToCurrentBox(ev.target);
    })
});

function createTicket(ticket){
  return `
  <div class="ticket-container">
    <div class="ticket-priority p1">${ticket.priority}</div>
    <div class="ticket-id">${ticket.id}</div>
    <div class="ticket-content">
        <textarea disabled>${ticket.description}</textarea>
    </div>
    <div class="ticket-lock locked">
      <i class="fa-solid fa-lock"></i>
      <i class="fa-solid fa-lock-open"></i>
    </div>
    <div class="ticket-delete">
      <i class="fa-solid fa-trash"></i>
    </div>
</div>
`;
}

function clearList(){
  ticketSectionRef.innerHTML = '';
}

function listTickets(tickets){
  clearList();
  tasks.forEach((tickets) => {
    console.log(tickets);
    const ticketContainerRef = document.createElement('div');
    ticketContainerRef.setAttribute('class', 'ticket-container');
    ticketContainerRef.setAttribute('data-id', tickets.id)
    const ticketHTML = createTicket(tickets);
    ticketContainerRef.innerHTML = ticketHTML;
    ticketSectionRef.appendChild(ticketContainerRef);
    const textAreaRef = ticketContainerRef.querySelector('.ticket-content testArea');
    textAreaRef.addEventListener('blur', function(ev) {
      const currentTicketContainerRef = ev.target.closest('.ticket-container');
      // console.log(currentTicketContainerRef);
      const currentTicketId = currentTicketContainerRef.getAttribute('data-id');
      console.log(currentTicketId);
      updateTaskDescription();
    });
  });
}

function updateTaskDescription(id, updatedDescription){
  console.log(id, description);
  const selectedTask = tasks.find((task) => task.id == id);
  selectedTask.description = updatedDescription;
  updateTasksInLocalStorage(tasks);
  console.log(tasks);
}

ticketSectionRef.addEventListener('click', function(ev){
  if ([...ev.target.classList].includes('fa-lock')){
    console.log(ev.target);
    const currentTicketContainerRef = ev.target.closest('.ticket-container');
    console.log(currentTicketContainerRef);
    const currentTicketId = currentTicketContainerRef.getAttribute('data-id');
    console.log(currentTicketId);
    const currentTextAreaRef = currentTicketContainerRef.querySelector('.ticket-content testArea');
    const lockRef = currentTicketContainerRef.querySelector('.ticket-lock');
    const isEditable = lockRef.classList.contains('locked');
    if (isEditable){
      lockRef.classList.remove('locked');
      currentTextAreaRef.removeAttribute('disabled');
    } else {
      lockRef.classList.add('locked');
      currentTextAreaRef.setAttribute('disabled',true);
    }
    console.log(isEditable)
  }

  if ([...ev.target.classList].includes('fa-solid')){
    const currentTicketContainerRef = ev.target.closest('.ticket-container');
    const taskId = currentTicketContainerRef.getAttribute('data-id');
    deleteTask(taskId);
    console.log(taskId);
  }
});

listTickets(tasks);

function deleteTask(taskId){
  //delete task from tasks
  tasks = tasks.filter(task => task.id != taskId);
  //update in local storage
  updateTasksInLocalStorage(tasks);
}

function updateTasksInLocalStorage(tasks) {
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getTasksFromLocalStorage(){
  const tasksData = localStorage.getItem('tasks');
  return tasksData ? JSON.parse(tasksData) : undefined;
}

deleteDivRef.addEventListener('click', function(ev) {
  const isDeleteEnabled = ev.currentTarget.classList.contains('enabled')
  if (!isDeleteEnabled){
    ev.target.classList.add('enabled');
    ticketSectionRef.classList.add('enable-delete');
  } else{
    ev.target.classList.remove('enabled');
    ticketSectionRef.classList.remove('enable-delete');
  }
});

priorityFilterRef.addEventListener('click', function(ev){
  if (ev.target.classList.contains('box')) {
    const selectedPriority = ev.target.id;
    const filteredTasks = tasks.filter(task => task.priority === selectedPriority);
    listTickets(filteredTasks);
  }
})

clearFilterRef.addEventListener('click', function(ev){
  listTickets(tasks);
})