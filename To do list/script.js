document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;
  if (taskText.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <span class='delete'>X</span>`;

  li.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      this.remove();
    } else {
      this.classList.toggle("done");
    }
  });

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}