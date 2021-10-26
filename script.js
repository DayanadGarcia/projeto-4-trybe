let digita = document.getElementById('texto-tarefa');//input aqui
let btn = document.getElementById('criar-tarefa');//botão add aqui
let list = document.getElementById('lista-tarefas');//ol aqui
let btnApaga = document.getElementById('apaga-tudo');//botao de apagar aqui

function criaItem() {
  let itemLista = document.createElement('li');//li aqui
  list.appendChild(itemLista);//li filho de ol aqui

  itemLista.innerText = digita.value;// pega o texto do input
  digita.value = '';//apaga os valores do input
  itemLista.addEventListener('dblclick', riscaTarefa);
  itemLista.addEventListener('click', selecionado);
}

function riscaTarefa(event) {//marca a tarefa como concluida
  let acionado = document.querySelector('.completed'); //variavel que guarda a class completed "ativa"

  event.target.classList.add('completed');//add um evento a class/ evento de dblclick

  if (acionado) { //compara se possui a class completed
    event.target.classList.remove('completed');//remove a class completed se for vdd
  }
}

function selecionado(event) {
  let selected = document.querySelectorAll('.selected');//cria var para selecionar
  for (let index = 0; index < selected.length; index++) {
    selected[index].classList.remove('selected');//remove todos os itens selecionados
  }
  event.target.classList.add('selected');// vai add a classe para o item que está clicado agora
}

function apagaTudo(event) {
  let contemItem = document.getElementsByTagName('li');//cria var para selecionar
  for (let index = 0; index < contemItem.length; index++) {
    if (condicontemItem[index] > 0) {
      contemItem[index].remove('li');//remove todos os itens selecionados  
    } 
  } 
 
}
btn.addEventListener('click', criaItem);
 btnApaga.addEventListener('click', apagaTudo);