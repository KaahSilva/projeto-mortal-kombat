const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;

    if (idSelecionado === "scorpion") {
      return;
    }

    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    const nomeJogador1 = document.getElementById("nome-jogador-1");
    const nomeSelecionado = personagem.getAttribute("data-name");
    const personagemSelecionado = document.querySelector(".selecionado");

    personagemSelecionado.classList.remove("selecionado");
    personagem.classList.add("selecionado");

    nomeJogador1.innerHTML = nomeSelecionado;
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
  });
});
