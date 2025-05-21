const fs = require('fs');
const taskManager = require("./taskManager");

function saveTasks(filePath, tasksArray) {
  fs.writeFileSync(filePath, JSON.stringify(tasksArray));
}

function loadTasks(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

module.exports = { saveTasks, loadTasks };

// Carrie's version
// Each looks like a two step process

// function saveTasks(filePath, tasksArry){
//   let jsonTasks = JSON.stringify(tasksArray);
//   fs.writeFileSync(filePath, jsonTasks);
//   console.log('\nTasks saved to file.');
// }

// function loadTasks(filePath){
//   if(fs.existsSync(filePath)){
//     // convert JSON to JS array and return it
//     const jsonDAta = fs.readFileSync(filePath, 'utf-8');

//   }
// }