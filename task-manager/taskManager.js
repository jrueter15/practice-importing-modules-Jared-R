function addTask(tasks, task) {
  tasks.push(task);
  console.log(`\n${task} has been added`);
}

function listTasks(tasks) {
  console.log("\nCURRENT TASKS\n");
  tasks.forEach((task) => console.log(task));
}

module.exports = { addTask, listTasks };
