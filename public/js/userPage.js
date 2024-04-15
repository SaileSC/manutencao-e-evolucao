const validarBusca = () => {
    const tipo = document.getElementById("tipo");
    var inputBusca = document.getElementById('inputBusca');
    if(tipo.value == "todos"){
        inputBusca.required = false;
        inputBusca.disabled = true;
        inputBusca.value = "Todos selecionados";
        
    }else{
        inputBusca.required = true;
        inputBusca.disabled = false;
        inputBusca.value = "";
    }
}


const botaoDeleta = (event) => {
    const modal = document.querySelector("#confirmaDelecao")
    //modal
    var objModal = new bootstrap.Modal(modal);
    objModal.show();

    //atualiar nome no modal
    const name = modal.querySelector("#usuarioModal") //campo do modal
    const rowUsuario = event.target.closest("tr").querySelector("td:first-child")
    name.textContent = rowUsuario.textContent
    const userId = event.target.dataset.id
    const btnModal = modal.querySelector("a")
    btnModal.href = `/usuario/remove/${userId}`
}



document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById("tipo");
    if(select){
        select.addEventListener("change", validarBusca);
    }

    const btns = document.querySelectorAll(".deleta")
    btns.forEach(btn => {
        btn.addEventListener("click", botaoDeleta)
    })
});

