function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value;

  if (taskText === "") {
    alert("Kuch likho pehle!");
    return;
  }

  let ul = document.getElementById("taskList");
  let li = document.createElement("li");
  li.innerText = taskText;
  li.onclick = function() {
  li.style.textDecoration = "line-through";
  li.style.color = "gray";
};

  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function() {
    li.remove();
  };
  li.appendChild(deleteBtn);

  ul.appendChild(li);
  input.value = "";
}