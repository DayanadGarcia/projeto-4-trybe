let digita = document.getElementById('texto-tarefa');//input aqui
let btn = document.getElementById('criar-tarefa');//botão aqui
let list = document.getElementById('lista-tarefas');//ol aqui

function criaItem() {
  let itemLista = document.createElement('li');//li aqui
  list.appendChild(itemLista);//li filho de ol aqui
  itemLista.innerText = digita.value;// pega o texto do input
  digita.value = '';//apaga os valores do input
  itemLista.addEventListener('click', addBackground);
  itemLista.addEventListener('dblclick', riscaTarefa);
}

function addBackground(event) {
 event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscaTarefa(event) {
  event.target.style.textDecoration = 'line-through';
}

function selecionado() {

}

btn.addEventListener('click', criaItem);
