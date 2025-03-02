// Background color changes
const colors = ['#74b9ff', '#a29bfe', '#00cec9', '#ffeaa7', '#dfe6e9', '#55efc4']
const navButton = document.getElementById('color-btn').addEventListener('click', function () {
  const colorChanges = parseInt(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorChanges];
})

// Date
let date = new Date();
let dateAdd = date.toDateString();
let currentDate = document.getElementById('date');
  currentDate.innerHTML = `${dateAdd}`;

// completed button click
let btnCompleted = document.getElementsByClassName('btn-completed');
let clearHistory = document.getElementById('clear-history');


for (let btn of btnCompleted) {
  btn.addEventListener('click', function (event) {
    alert('board update successfully')
    console.log(btn);
    btn.disabled = true;
    // Task Assigned Added
    let taskNumber = document.getElementById('task-numbers').innerText;
    let convertTaskNumber = parseInt(taskNumber);
    if (convertTaskNumber <= 6) {
      let totalTask = convertTaskNumber - 1;
      document.getElementById('task-numbers').innerText = totalTask;
    }
    // total task completed
    let taskComplete = document.getElementById('task-complete').innerText;
    let convertTaskComplete = parseInt(taskComplete);
    if (convertTaskComplete >= 23) {
      let total = convertTaskComplete + 1;
      document.getElementById('task-complete').innerText = total;
    }
    let taskTitle = btn.parentElement.parentElement.querySelector('h3').innerText;

    // time added
    let time = new Date();
    let timeAdd = time.toLocaleTimeString();
    // add history
    let addHistory = document.createElement('p');
    addHistory.innerHTML = `You have completed the task <strong>${taskTitle}</strong> at ${timeAdd}.`;
    document.getElementById('add-history').appendChild(addHistory);
  });
    
  }
    
// history cleared
document.getElementById('clear-history').addEventListener('click', function () {
  document.getElementById('add-history').innerHTML = ' ';
})



// completed button click
// let btnCompleted = document.getElementById('btn-completed');
// let clearHistory = document.getElementById('clear-history');

// document.getElementById('btn-completed').addEventListener('click', function (event) {
  
//   btnCompleted.disabled = true;
  
//   // Task Assigned Added
//   let taskNumber = document.getElementById('task-numbers').innerText;
//   let convertTaskNumber = parseInt(taskNumber);
//   if (convertTaskNumber <= 6) {
//     let totalTask = convertTaskNumber - 1;
//     document.getElementById('task-numbers').innerText = totalTask;
//   }
  
//   // total task completed
//   let taskComplete = document.getElementById('task-complete').innerText;
//   let convertTaskComplete = parseInt(taskComplete);
//   if (convertTaskComplete >= 23) {
//     let total = convertTaskComplete + 1;
//     document.getElementById('task-complete').innerText = total;
//   }
// // time added
//   let time = new Date();
//   let timeAdd = time.toLocaleDateString();
  
//   let addHistory = document.getElementById('add-history');
//   addHistory.innerHTML = `<p>You have completed the task <strong>Fix Mobile Button Issue</strong> at ${timeAdd}.</p>`;
// })
// // history cleared
// document.getElementById('clear-history').addEventListener('click', function () {
//   document.getElementById('add-history').innerHTML = ' ';
// })


