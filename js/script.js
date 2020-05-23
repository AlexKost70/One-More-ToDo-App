'use strict';

const submitButton = document.getElementsByClassName('submit-button');
const taskName = document.getElementById('name');
const taskDescription = document.getElementById('description');
const listTasks = document.getElementsByClassName('list-tasks');
const listInfo = document.getElementsByClassName('list-info');

submitButton[0].addEventListener("click", function(event){
    event.preventDefault();
    if((taskName.value != '') && (taskDescription.value != '')){
        addTask(taskName.value, taskDescription.value);
        taskName.value = '';
        taskDescription.value = '';
    }
});

function addTask(name, description){
    listTasks[0].insertAdjacentHTML('afterEnd', 
    `
    <div class="list-task">
        <p class="list-task-header">${ name }<span class="list-close"></span><span class="list-minimize"></span></p>
        <p class="list-task-description">${ description }</p>
    </div>
    `
    );
    let newListTask = document.querySelector('.list-task');
    statusChecker();
    removeTaskListener(newListTask);
    minimizeTaskListener(newListTask);
}

function statusChecker() {
    let listTask = document.querySelectorAll('.list-task');
    if(listTask.length > 0 ) {
        listInfo[0].classList.add('hidden');
    } else {
        listInfo[0].classList.remove('hidden');
    }
}

function removeTaskListener(task) {
    task.querySelector('.list-close').addEventListener('click', function(){
        task.remove();
        statusChecker();
    });
}

function minimizeTaskListener(task) {
    task.querySelector('.list-minimize').addEventListener('click', function(){
        task.classList.toggle('minimized');
        task.querySelector('.list-task-description').classList.toggle('hidden');
    });
}


