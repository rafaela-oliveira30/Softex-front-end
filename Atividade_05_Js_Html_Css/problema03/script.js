function calcular() {
  // 1️⃣ Pegar nome do cliente
  const nome = document.getElementById("cliente").value;

  if (nome.trim() === "") {
    alert("Por favor, insira o nome do cliente.");
    return;
  }

  let total = 0;
  let bebidaEscolhida = "";
  let docesSalgados = [];

  // 2️⃣ Verificar bebida selecionada e somar valor
  if (document.getElementById("suco").checked) {
    bebidaEscolhida = "Suco";
    total += 4.00;
  } else if (document.getElementById("refrigerante").checked) {
    bebidaEscolhida = "Refrigerante";
    total += 2.50;
  } else if (document.getElementById("agua").checked) {
    bebidaEscolhida = "Água";
    total += 1.50;
  }

  // 3️⃣ Verificar doces e salgados marcados
  if (document.getElementById("bolo").checked) {
    docesSalgados.push("Bolo");
    total += 3.50;
  }
  if (document.getElementById("pastel").checked) {
    docesSalgados.push("Pastel");
    total += 3.00;
  }
  if (document.getElementById("torta").checked) {
    docesSalgados.push("Torta");
    total += 4.00;
  }

  // 4️⃣ Montar mensagem final
  let mensagem = `<strong>Cliente:</strong> ${nome}<br>`;
  mensagem += `<strong>Bebida:</strong> ${bebidaEscolhida || "Nenhuma"}<br>`;
  mensagem += `<strong>Doces e Salgados:</strong> ${docesSalgados.length > 0 ? docesSalgados.join(", ") : "Nenhum"}<br>`;
  mensagem += `<strong>Valor Total:</strong> R$ ${total.toFixed(2)}`;

  // 5️⃣ Exibir mensagem
  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";
  resultado.innerHTML = mensagem;
}

function limpar() {
  // Limpa campos
  document.getElementById("cliente").value = "";
  document.querySelectorAll("input[type=radio]").forEach(el => el.checked = false);
  document.querySelectorAll("input[type=checkbox]").forEach(el => el.checked = false);

  // Esconde resultado
  document.getElementById("resultado").style.display = "none";
}
