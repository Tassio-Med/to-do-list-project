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