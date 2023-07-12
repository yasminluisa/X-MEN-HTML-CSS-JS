const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener("mouseenter", () => {

        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: "smooth"});  
        }
        
        RemoverSelecaoDoPersonagem();

        personagem.classList.add("selecionado");

        AterarImagemPersonagemSelecionado(personagem);

        AlterarNomePersonagemSelecionado(personagem);

        AterarDescricaoPersonagem(personagem);
    })
})

function AterarDescricaoPersonagem(personagem) {
    const descricaopersonagem = document.getElementById("descricao-personagem");
    descricaopersonagem.innerText = personagem.getAttribute("data-description");
}

function AlterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function AterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./scr/imagens/imagens/card-${idPersonagem}.png`;
}

function RemoverSelecaoDoPersonagem() {
    const personagemselecionado = document.querySelector(".selecionado");
    personagemselecionado.classList.remove("selecionado");
}
