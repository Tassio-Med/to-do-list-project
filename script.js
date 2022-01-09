/*Usei referências encontradas no seguinte site ---> https://medium.com/walternascimentobarroso-pt/criando-um-todo-com-javascript-8622331367eb */

function addTask() {
  let textTask = document.querySelector('#texto-tarefa');
  let taskList = document.querySelector('#lista-tarefas');
  if(textTask.value !== ''){
    let list = document.createElement('li'); 
    let text = textTask.value;
    list.innerHTML = text;
    taskList.appendChild(list);
    textTask.value = '';
    textTask.focus();
  }
  
}

let btn = document.querySelector('#criar-tarefa');
btn.addEventListener('click', addTask);

/* ---> Mudar a cor <--- */


let completedTasks = document.getElementsByTagName('li');
let dadElement = document.querySelector('#lista-tarefas')

function bckgColor(event) {   
  for (let i = 0; i < completedTasks.length; i += 1){
    completedTasks[i].classList.remove('color-background');
    event.target.classList.add('color-background');
  }
}
dadElement.addEventListener('click', bckgColor);


/* ---> Marcar check <--- */


let ol = document.querySelector('#lista-tarefas');
ol.addEventListener('dblclick', function(event) {
    event.target.classList.toggle('completed');
  });


