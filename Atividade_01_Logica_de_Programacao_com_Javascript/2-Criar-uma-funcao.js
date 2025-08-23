// 1. Criando a função que recebe nome e idade
function verificarIdade(nome, idade) {
  // 2. Estrutura condicional para verificar a idade
  if (idade >= 18) {
    return `${nome} tem ${idade} anos e é maior de idade.`;
  } else {
    return `${nome} tem ${idade} anos e é menor de idade.`;
  }
}

// 3. Exemplo de uso dessa função
console.log(verificarIdade("João", 16));  // João tem 16 anos e é menor de idade.
console.log(verificarIdade("Maria", 20)); // Maria tem 20 anos e é maior de idade.