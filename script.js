let digita = document.getElementById('texto-tarefa');//input aqui
let btn = document.getElementById('criar-tarefa');//botão aqui
let list = document.getElementById('lista-tarefas');//ol aqui

function criaItem() {
  let itemLista = document.createElement('li');//li aqui
  list.appendChild(itemLista);//li filho de ol aqui
  itemLista.innerText = digita.value;// pega o texto do input
  digita.value = '';//apaga os valores do input
}
function addBackground() {
  //itemLista.style.background = 'rgb(128, 128, 128)';
  itemLista.style.backgroundColor = 'rgb(128, 128, 128)';
}

btn.addEventListener('click', criaItem);
itemLista.addEventListener('click', addBackground);
