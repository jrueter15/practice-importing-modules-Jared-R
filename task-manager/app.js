const path = require("node:path");
const tm = require("./taskManager");
const { saveTasks, loadTasks } = require("./fileHandler");

// Build file path
const filePath = path.join(__dirname, "tasks.json");

// Load tasks from tasks.json
const tasksArray = loadTasks(filePath);

// tm.addTask(tasksArray, 'mow the lawn');
// tm.addTask(tasksArray, 'clean the house');
// tm.addTask(tasksArray, 'move to Ireland');

tm.listTasks(tasksArray);

saveTasks(filePath, tasksArray);

// Adding more tasks. Comment out the addTasks you've already done.
tm.addTask(tasksArray, "mow the lawn");
