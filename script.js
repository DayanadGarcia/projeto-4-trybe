let digita = document.getElementById('texto-tarefa');//input aqui
let btn = document.getElementById('criar-tarefa');//botão aqui
let list = document.getElementById('lista-tarefas');//ol aqui

function criaItem() {
  let itemLista = document.createElement('li');//li aqui
  list.appendChild(itemLista);//li filho de ol aqui

  itemLista.innerText = digita.value;// pega o texto do input
  digita.value = '';//apaga os valores do input
  itemLista.addEventListener('dblclick', riscaTarefa);
  itemLista.addEventListener('click', selecionado);
}

function riscaTarefa(event) {
  var acionado = document.querySelector('.completed');

  event.target.classList.add('completed');

  if (acionado) {
    event.target.classList.remove('completed');
  }
}

function selecionado(event) {
  let selected = document.querySelectorAll('.selected');//cria var para selecionar
  for (let index = 0; index < selected.length; index++) {
    selected[index].classList.remove('selected');//remove todos os itens selecionados
  }
  event.target.classList.add('selected');// vai add a classe para o item que está clicado agora
}

btn.addEventListener('click', criaItem);
