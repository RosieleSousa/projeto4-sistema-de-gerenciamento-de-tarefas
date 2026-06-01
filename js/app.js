let tarefas = [];

const lista = document.getElementById("lista");
const contador = document.getElementById("contador");

function atualizarContador(){
  contador.textContent =
    `Tarefas: ${tarefas.length}`;
}

function adicionar(){

  const input =
    document.getElementById("inputTarefa");

  const texto = input.value.trim();

  if(texto === ''){
    return;
  }

  const tarefa = {
    descricao:texto,
    concluida:false
  };

  tarefas.push(tarefa);

  renderizar();

  input.value='';
}

function renderizar(){

  lista.innerHTML='';

  tarefas.forEach(tarefa=>{

    const li=document.createElement("li");

    const span=document.createElement("span");
    span.textContent=tarefa.descricao;

    if(tarefa.concluida){
      span.classList.add("concluida");
    }

    const botao=document.createElement("button");
    botao.textContent="Concluir";

    botao.onclick=()=>{

      tarefa.concluida=true;

      renderizar();
    };

    li.appendChild(span);
    li.appendChild(botao);

    lista.appendChild(li);
  });

  atualizarContador();
}