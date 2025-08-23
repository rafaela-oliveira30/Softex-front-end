// 1. Criando uma função
function calculadora(a, b, operacao) {
  let resultado;

  // 2. Escolhendo a operação com switch...case
  switch (operacao) {
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      // 3. Verificando divisão por zero
      if (b === 0) {
        return "Erro: divisão por zero não é permitida.";
      }
      resultado = a / b;
      break;
    default:
      return "Operação inválida. Use +, -, * ou /.";
  }

  // 4. Retornar o resultado
  return resultado;
}

// 5. Exemplos de uso
console.log(calculadora(10, 5, "+")); // 15
console.log(calculadora(10, 5, "-")); // 5
console.log(calculadora(10, 5, "*")); // 50
console.log(calculadora(10, 5, "/")); // 2
console.log(calculadora(10, 0, "/")); // Erro: divisão por zero não é permitida.
