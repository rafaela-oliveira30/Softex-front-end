// 🧠 1. Selecionar os elementos do HTML
const input = document.getElementById("tarefaInput");
const botaoAdicionar = document.getElementById("adicionarBtn");
const lista = document.getElementById("listaTarefas");
const erro = document.getElementById("erro");

// 🛠️ 2. Adicionar tarefa ao clicar no botão
botaoAdicionar.addEventListener("click", function () {
  const textoTarefa = input.value.trim(); // remove espaços extras

  // 🚫 Verificação: impedir tarefa vazia
  if (textoTarefa === "") {
    erro.textContent = "⚠️ Digite uma tarefa antes de adicionar!";
    return;
  }
  erro.textContent = ""; // limpa o erro se estiver tudo certo

  // 📦 Criar o item da lista
  const li = document.createElement("li");
  li.classList.add("list-group-item");

  li.innerHTML = `
    <span>${textoTarefa}</span>
    <div>
      <button class="btn btn-sm btn-primary me-2 concluir">Concluir</button>
      <button class="btn btn-sm btn-danger remover">Remover</button>
    </div>
  `;

  // ➕ Adicionar na lista
  lista.appendChild(li);

  // 🔄 Limpar campo de entrada
  input.value = "";
});

// ✅ 3. Delegação de eventos: marcar como concluída ou remover
lista.addEventListener("click", function (e) {
  // Se clicar no botão "Concluir"
  if (e.target.classList.contains("concluir")) {
    const tarefa = e.target.parentElement.previousElementSibling;
    tarefa.classList.toggle("concluida"); // adiciona ou remove o estilo
  }

  // Se clicar no botão "Remover"
  if (e.target.classList.contains("remover")) {
    const li = e.target.closest("li");
    li.remove(); // apaga a tarefa
  }
});
