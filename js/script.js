function mostrarConteudo(id) {
    const conteudos = document.querySelectorAll(".conteudo");

    conteudos.forEach(function(conteudo) {
        conteudo.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}