const openModelButtonRef = document.querySelector(".quick-action .icon.add");
const modelRef = document.querySelector(".model");
const closeModelButtonRef = document.querySelector(
  ".model .right-section .close"
);
const textareaRef = document.querySelector(".model textarea");
const priorityBoxesRef = document.querySelector(".model .right-section .box");
const ticketSectionRef = document.querySelector('.ticket-section');

const tasks = [];

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
    console.log(description, priority);
    tasks.push({
      id: tasks.length + 1,
      description: description,
      priority: priority,
    });
    console.log(tasks);
    listTickets(tasks);
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

function createTicket(tasks){
  return `
  <div class="ticket-container">
    <div class="ticket-priority p1">${ticket.priority}</div>
    <div class="ticket-id">${ticket.id}</div>
    <div class="ticket-content">
        <textarea disabled>${ticket.description}</textarea>
    </div>
    <div class="ticket-lock locked">
    <i class="fa-duotone fa-lock-keyhole"></i>
    <i class="fa-duotone fa-lock-keyhole-open"></i>
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
    const ticketHTML = createTicket(tickets);
    ticketContainerRef.innerHTML = ticketHTML;
    ticketSectionRef.appendChild(ticketContainerRef);
  })
}
