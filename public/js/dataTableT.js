const estadoPaginacao = (dataTable) => {
    const rowCount = dataTable.rows().count();
    const dtPaging = document.querySelector(".dt-paging");
    if (rowCount > 8) {
        dtPaging.style.display = "block";
    } else {
        dtPaging.style.display = "none"; 
    }
}


document.addEventListener("DOMContentLoaded", function() {
    jQuery(function() {    
        let dataTable = $('#usuarios').DataTable({
            "language": {
                "url": "https://cdn.datatables.net/plug-ins/2.0.3/i18n/pt-BR.json"
            },
            "lengthMenu": [8],
            "lengthChange": false,
            "searching": false,
            "pagingType": "simple_numbers",
            "drawCallback": function() {
                estadoPaginacao(dataTable);
            }
        });
    });
});