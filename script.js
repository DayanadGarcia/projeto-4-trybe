const digita = document.getElementById('texto-tarefa'); // input aqui
const btnCriar = document.getElementById('criar-tarefa'); // botão add aqui
const list = document.getElementById('lista-tarefas'); // ol aqui
const btnApgTudo = document.getElementById('apaga-tudo'); // botao de apagar tudo aqui
const btnApgFinalizados = document.getElementById('remover-finalizados'); // botao de apagar finalizados

function riscaTarefa(event) { // ----------funcao RiscaTarefa----------
  if (event.target.classList.contains('completed')) { // compara se contem a class completed
    event.target.classList.remove('completed'); // remove a class completed
  } else { // verifica se não tem a classe
    event.target.classList.add('completed'); // add a classe
  }
}
btnCriar.addEventListener('click', () => { // -----------cria elementos na lista-----------
  const itemLista = document.createElement('li'); // li aqui
  list.appendChild(itemLista); // li filho de ol aqui
  itemLista.innerText = digita.value; // pega o texto do input
  digita.value = ''; // apaga os valores do input
  itemLista.addEventListener('click', (event) => { // -------funçao anonima selecionado()-------
    const selected = document.querySelectorAll('.selected'); // cria var para selecionar
    for (let index = 0; index < selected.length; index += 1) {
      selected[index].classList.remove('selected'); // remove todos os itens selecionados
    }
    event.target.classList.add('selected'); // vai add a classe para o item que está clicado agora
  });
  itemLista.addEventListener('dblclick', riscaTarefa); // chama a funcao riscaTarefa ^
});

btnApgTudo.addEventListener('click', () => { // ------funçao apagaTudo()---------
  const tarefas = document.querySelector('ol'); // seleciona a lista ordenada
  tarefas.innerHTML = ''; // transforma seu conteudo em vazio
});

btnApgFinalizados.addEventListener('click', () => { // -----------funcao apagaConcluido-------------
  const concluido = document.querySelectorAll('.completed');
  for (let index = 0; index < concluido.length; index += 1) {
    concluido[index].remove('completed');
  }
  // event.target.classList.remove('completed');
});
