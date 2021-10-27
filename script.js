let digita = document.getElementById('texto-tarefa');//input aqui
let btn = document.getElementById('criar-tarefa');//botão add aqui
let list = document.getElementById('lista-tarefas');//ol aqui
let btnApaga = document.getElementById('apaga-tudo');//botao de apagar aqui

function criaItem() {
  let itemLista = document.createElement('li');//li aqui
  list.appendChild(itemLista);//li filho de ol aqui
  itemLista.innerText = digita.value;// pega o texto do input
  digita.value = '';//apaga os valores do input
  itemLista.addEventListener('click', selecionado);
  itemLista.addEventListener('dblclick', riscaTarefa); 
}

function riscaTarefa(event) {//marca a tarefa como concluida
  let acionado = document.querySelector('.completed'); //variavel que guarda a class completed "ativa"
  if (acionado) { //compara se possui a class completed
    event.target.classList.remove('completed');//remove a class completed
  }else if(!acionado) {//verifica se não tem a classe
    event.target.classList.add('completed');//add a classe
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
  let tarefas = document.querySelector("ol");//seleciona a lista ordenada
  tarefas.innerHTML = "";//transforma seu conteudo em vazio
  
}

btn.addEventListener('click', criaItem);
btnApaga.addEventListener('click', apagaTudo);
