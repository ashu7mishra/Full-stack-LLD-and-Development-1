const openModelButtonRef = document.querySelector(".quick-action .icon.add");
const modelRef = document.querySelector(".model");
const closeModelButtonRef = document.querySelector(
  ".model .right-section .close"
);
const textareaRef = document.querySelector(".model textarea");
const priorityBoxesRef = document.querySelector(".model .right-section .box");

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
  priorityBoxesRef.forEach(singleBoxRef, function () {
    singleBoxRef.classList.remove("selected");
  });
}

function addSelectedClassToCurrentBox(boxRef) {
  boxRef.classList.add("selected");
}

priorityBoxesRef.forEach(function (boxRef) {
  boxRef.addEventListener("click", function (ev) {
    // remove selected class from all box
    removeSelectedClassFromBox();
    // add selected class to current box
    addSelectedClassToCurrentBox(ev.target);
  });
});
