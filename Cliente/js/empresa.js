

$('#register-form-empresa').submit(function(e){
    const postData = {
        razonSocial: $('#razonSocialRegister').val(),
        ruc: $('#rucRegister').val(),
        rubro: $('#rubroRegister').val(),
        website: $('#websiteRegister').val(),
        direccion: $('#direccionRegisterEmpresa').val(),
        referencia: $('#referenciaRegister').val(),
        aniversarios: $('#dateRegister').val()
    };
    $.post('../Cliente/php/task-add-empresa.php', postData, function(response){
        fetchCliente();
        $('#register-form-empresa').trigger('reset');
    });
});

function fetchCliente(){
    $.ajax({
        url: '../Cliente/php/task-list-all.php',
        type: 'GET',
        success: function(response){
            let task = JSON.parse(response);
            let template = '';
            task.forEach(tasks =>{
                template +=`
                    <tr taskId="${tasks.id}">
                        <td><a  class = "btn btn-primary btnAtender rounded-pill" data-toggle="modal" data-target="#myModalAtender"> Atender  </a> </td>
                        <td><a  class = "btn btn-warning btnVer rounded-pill" data-toggle="modal" data-target="#myModalVer"> Ver  </a> </td>
                        <td><a  class = "btn btn-info btnEditar rounded-pill" data-toggle="modal" data-target="#myModalEditar"> Editar  </a> </td>
                        <td><a  class = "btn btn-danger btnEliminar rounded-pill"> Eliminar  </a> </td>
                        <td>${tasks.id}</td>
                        <td>${tasks.cliente}</td>
                        <td>${tasks.empresa}</td>
                    </tr>
                `
            });
            $('#cotenidoCliente').html(template);
        }
    });
}