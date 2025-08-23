// 1. Criando a função de conversão
function converterTemperatura(temp) {
  let valorConvertido;
  let novaEscala;

  // 2. Verificando qual a escala atual
  if (temp.escala === "C") {
    valorConvertido = temp.valor * 1.8 + 32;
    novaEscala = "F";
  } else if (temp.escala === "F") {
    valorConvertido = (temp.valor - 32) / 1.8;
    novaEscala = "C";
  } else {
    return "Escala inválida! Use 'C' para Celsius ou 'F' para Fahrenheit.";
  }

  // 3. Retornando o novo valor com a nova escala
  return `Temperatura convertida: ${valorConvertido.toFixed(2)}°${novaEscala}`;
}

// 4. Exemplos de uso
console.log(converterTemperatura({ valor: 25, escala: "C" })); // 77°F
console.log(converterTemperatura({ valor: 98.6, escala: "F" })); // 37°C
