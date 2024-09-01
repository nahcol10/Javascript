const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search');
const taskList = document.querySelector('.task-list ul');

searchBtn.addEventListener('click',() => {
    if(searchBox.value === ''){
        alert("You must write something!!");
    }else{
        let li = document.createElement('li');
        li.innerHTML = searchBox.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; // for X icon
        li.appendChild(span);
    }
    searchBox.value = '';
    saveData();
})
taskList.addEventListener('click',(e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
    saveData();
},false);

function saveData(){
    localStorage.setItem('data',taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML = localStorage.getItem('data');
}
showTask();
