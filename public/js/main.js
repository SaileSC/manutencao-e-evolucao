const selected = (id) =>{
    const btns = document.querySelector(`#${id}`)
    btns.classList.replace("btn-outline-success", "btn-success") 
}

const path = window.location.pathname + window.location.search;
let pageId = path.replace("/", "page")
selected(pageId);

const validarBusca = () => {
    const tipo = document.getElementById("tipo");
    var inputBusca = document.getElementById('inputBusca');
    if(tipo.value == "todos"){
        inputBusca.removeAttribute('required');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const select = document.getElementById("tipo");
    
    select.addEventListener("change", validarBusca);
});
