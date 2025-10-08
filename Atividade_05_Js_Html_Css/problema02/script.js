function calcular() {
  let valor = parseFloat(document.getElementById("valor").value);
  let parcelas = parseInt(document.getElementById("parcelas").value);
  let juros = parseFloat(document.getElementById("juros").value) / 100;

  if (isNaN(valor) || isNaN(parcelas) || isNaN(juros)) {
    alert("Por favor, preencha todos os campos corretamente!");
    return;
  }

  // Fórmula da parcela mensal com juros compostos
  let parcelaMensal =
    valor * (juros * Math.pow(1 + juros, parcelas)) /
    (Math.pow(1 + juros, parcelas) - 1);

  let totalPagar = parcelaMensal * parcelas;

  document.getElementById("resultado").innerHTML = `
    💰 Valor total a pagar: <strong>R$ ${totalPagar.toFixed(2)}</strong><br>
    📅 Valor da parcela mensal: <strong>R$ ${parcelaMensal.toFixed(2)}</strong>
  `;

  // Criar tabela de amortização
  let tbody = document.querySelector("#tabela tbody");
  tbody.innerHTML = "";

  let saldo = valor;

  for (let i = 1; i <= parcelas; i++) {
    let jurosParcela = saldo * juros;
    let amortizacao = parcelaMensal - jurosParcela;
    saldo -= amortizacao;

    let linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${i}</td>
      <td>R$ ${parcelaMensal.toFixed(2)}</td>
      <td>R$ ${saldo > 0 ? saldo.toFixed(2) : "0.00"}</td>
    `;
    tbody.appendChild(linha);
  }
}
