function converterData() {
  const input = document.getElementById("dataInput").value.trim();
  const resultado = document.getElementById("resultado");

  // Limpa mensagem anterior
  resultado.style.display = "none";
  resultado.classList.remove("alert-success", "alert-danger");

  // Validação básica do formato
  const partes = input.split("/");
  if (partes.length !== 3) {
    mostrarErro("Formato inválido! Use dd/mm/aaaa.");
    return;
  }

  let [dia, mes, ano] = partes.map(Number);

  // Validações de números
  if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
    mostrarErro("Digite apenas números no formato dd/mm/aaaa.");
    return;
  }

  // Validação do mês
  if (mes < 1 || mes > 12) {
    mostrarErro("Mês inválido! Deve estar entre 01 e 12.");
    return;
  }

  // Dias máximos de cada mês
  const diasNoMes = [31, ehBissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Validação do dia
  if (dia < 1 || dia > diasNoMes[mes - 1]) {
    mostrarErro(`Dia inválido! ${mesExtenso(mes)} tem até ${diasNoMes[mes - 1]} dias.`);
    return;
  }

  // Se estiver tudo certo, exibe o resultado
  const dataPorExtenso = `${dia} de ${mesExtenso(mes)} de ${ano}`;
  resultado.textContent = dataPorExtenso;
  resultado.classList.add("alert-success");
  resultado.style.display = "block";
}

// Função para verificar ano bissexto
function ehBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Função para retornar o mês por extenso
function mesExtenso(mes) {
  const nomes = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];
  return nomes[mes - 1];
}

// Exibir mensagens de erro
function mostrarErro(mensagem) {
  const resultado = document.getElementById("resultado");
  resultado.textContent = mensagem;
  resultado.classList.add("alert-danger");
  resultado.style.display = "block";
}