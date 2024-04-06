function acoes(id) {
    return `<a href="/usuario/${id}"> <i class="bi bi-eye-fill"></i></a>
            <a href="/usuario/update/${id}"> <i class="bi bi-pencil-fill"></i></a>
            <a href="/usuario/remove/${id}"> <i class="bi bi-trash-fill"></i></a>`;
}

const buscaUsuario = () => {
    fetch('http://localhost:3355/usuarios')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocorreu um erro ao obter os dados');
        }
        return response.json();
    })
    .then(data => {
        atualizarTabela(data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

function atualizarTabela(data) {
    const tabelaUsuarios = $('#usuarios').DataTable();
    tabelaUsuarios.clear().draw();
    tabelaUsuarios.rows.add(data).draw();

    let dtPaging = document.querySelector(".dt-paging")
    if (Object.keys(data).length > 8) {
        dtPaging.style.display = "block";
    } else {
        dtPaging.style.display = "none"; 
    }
}

$(document).ready(function() {    
    $('#usuarios').DataTable({
        "language": {
            "url": "https://cdn.datatables.net/plug-ins/2.0.3/i18n/pt-BR.json"
        },
        "lengthMenu": [8],
        "lengthChange": false,
        "searching": false,
        "pagingType": "simple_numbers",
        "columns": [
            { "data": "nome" },
            { "data": "login" },
            { "data": "email" },
            { 
                "data": "id",
                "render": function(data) {
                    return acoes(data);
                }
            }
        ]
    });

    buscaUsuario();
});
