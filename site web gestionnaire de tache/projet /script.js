let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");
let totalTasksElement = document.querySelector("#total-tasks");

let taskList = [
//     'SOAP,REST,GraphQL etRPC',
//     'SQL et NoSQL',
//     'Node.js,NGINX,Apache',
//     'HTTP et WebSockets',
//     'JavaScript,PHP,Python,Java,C,Swift,Kotlin'
];

function deleteItem(e){

    task = e.target.parentElement.previousElementSibling.innerHTML;
    let index = taskList.indexOf(task);
    if(index !== -1){
        taskList.splice(index,1)
    }
    creationList();
}

function creationList(){

    listElement.innerHTML ="";
    taskList.forEach(function(item){
        let newItem = document.createElement("li");

        // add new span for text
        let span = document.createElement("span");
        span.innerHTML = item;
        newItem.appendChild(span);

        // add delete button
 
        let anchorElement = document.createElement("a");
        anchorElement.classList.add("delete");
        anchorElement.innerHTML = '<i class="fas fa-trash-alt"> </i>';
        newItem.appendChild(anchorElement);

        anchorElement.addEventListener('click', (e)=> deleteItem(e));

        // add li to ul

        listElement.appendChild(newItem);

    });

    totalTasksElement.innerHTML = taskList.length;
    inputElement.value = "";
}

creationList();

// function doesNotHaveWhiteSpace(s){

//     let stringWhithoutSpace = s.trim();
//     return stringWhithoutSpace.length > 0;
// }

function addTask(){

        if(inputElement.value){
            taskList.push(inputElement.value);
            creationList();
        }
}

formElement.addEventListener("submit" , function(e){
    e.preventDefault();
    addTask();
})