function adicionarTarefa(lista, tarefa) {

  if (!tarefa || tarefa.trim() === '') {
    return false;
  }

  lista.push({
    descricao: tarefa,
    concluida: false
  });

  return true;
}

function concluirTarefa(tarefa) {

  tarefa.concluida = true;

  return tarefa;
}

module.exports = {
  adicionarTarefa,
  concluirTarefa
};