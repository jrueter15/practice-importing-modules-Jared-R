const path = require("node:path");
const tm = require("./taskManager");
const fh = require("./fileHandler");

// Build file path
const filePath = path.join(__dirname, "tasks.json");

// Load tasks from tasks.json
const tasks = fh.loadTasks(filePath);

tm.addTask(tasks, "mow the lawn");
tm.addTask(tasks, "clean the house");
tm.addTask(tasks, "move to Ireland");

tm.listTasks(tasks);

fh.saveTasks(filePath, tasks);
