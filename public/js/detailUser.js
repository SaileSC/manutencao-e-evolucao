const botaoDeleta = () => {
    const modal = document.querySelector("#confirmaDelecao")
    //modal
    var objModal = new bootstrap.Modal(modal);
    objModal.show();



    const nomeUsuario = document.getElementById("nome")
    //atualiar nome no modal
    const name = modal.querySelector("#usuarioModal")
    name.textContent = nomeUsuario.value


    const idUsuario = document.getElementById("id")

    const btnModal = modal.querySelector("a")
    btnModal.href = `/usuario/remove/${idUsuario.value}`
}



document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll(".deleta")
    btns.forEach(btn => {
        btn.addEventListener("click", botaoDeleta)
    })
});

