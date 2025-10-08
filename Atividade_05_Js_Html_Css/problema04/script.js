// 📚 1. Criar as perguntas e respostas usando um array de objetos
const perguntas = [
  {
    pergunta: "1️⃣ Qual é a capital do Brasil?",
    opcoes: ["Rio de Janeiro", "Brasília", "São Paulo"],
    correta: 1
  },
  {
    pergunta: "2️⃣ Quantos planetas existem no sistema solar?",
    opcoes: ["7", "8", "9"],
    correta: 1
  },
  {
    pergunta: "3️⃣ Qual é o maior animal terrestre?",
    opcoes: ["Elefante", "Girafa", "Baleia Azul"],
    correta: 0
  }
];

// 📦 2. Criar o quiz dinamicamente no HTML
const quizContainer = document.getElementById("quiz");
perguntas.forEach((q, i) => {
  const bloco = document.createElement("div");
  bloco.classList.add("mb-4");
  bloco.innerHTML = `
    <p class="fw-bold">${q.pergunta}</p>
    ${q.opcoes
      .map(
        (opcao, index) => `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="pergunta${i}" value="${index}">
        <label class="form-check-label">${opcao}</label>
      </div>
    `
      )
      .join("")}
  `;
  quizContainer.appendChild(bloco);
});

// 🎯 3. Verificar as respostas quando clicar no botão
document.getElementById("enviar").addEventListener("click", function () {
  let pontuacao = 0;
  let resultadoHTML = "";

  perguntas.forEach((q, i) => {
    const selecionada = document.querySelector(`input[name="pergunta${i}"]:checked`);
    if (selecionada) {
      const resposta = parseInt(selecionada.value);
      if (resposta === q.correta) {
        pontuacao++;
        resultadoHTML += `<p class="correta">✅ ${q.pergunta} - Correta!</p>`;
      } else {
        resultadoHTML += `<p class="errada">❌ ${q.pergunta} - Errada (Correta: ${q.opcoes[q.correta]})</p>`;
      }
    } else {
      resultadoHTML += `<p class="errada">⚠️ ${q.pergunta} - Você não respondeu.</p>`;
    }
  });

  // 🧠 4. Mensagem personalizada
  let mensagem = "";
  if (pontuacao === 3) {
    mensagem = "🎉 Excelente! Você acertou tudo!";
  } else if (pontuacao === 2) {
    mensagem = "😊 Muito bem! Quase perfeito!";
  } else {
    mensagem = "📚 Continue estudando e tente novamente!";
  }

  // 📊 5. Mostrar resultado na tela
  document.getElementById("resultado").innerHTML = `
    <h4>Resultado:</h4>
    ${resultadoHTML}
    <p class="mt-3">Pontuação final: <strong>${pontuacao}/3</strong></p>
    <p>${mensagem}</p>
  `;
});
