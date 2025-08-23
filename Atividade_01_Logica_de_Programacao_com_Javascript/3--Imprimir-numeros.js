// 1. Criando um laço que vai de 1 até 100
for (let i = 1; i <= 100; i++) {
  
  // 2. Verificando múltiplos de 3 e 5 primeiro
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } 
  // 3. Verificando múltiplos de 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  } 
  // 4. Verificando múltiplos de 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  } 
  // 5. Se não for múltiplo de nenhum, imprime o número
  else {
    console.log(i);
  }
}