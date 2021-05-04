

    fetchCliente();

$('#register-form-cliente').submit(function(e) {
    const postData = {
        name: $('#nameRegister').val(),
        email: $('#emailRegister').val(),
        telefono: $('#telefonoRegister').val(),
        celular: $('#celularRegister').val(),
        direccion: $('#direccionRegister').val(),
        posicion: $('#posicionRegister').val(),
        distrito: $('#distritoRegister').val(),
        provincia: $('#provinciaRegister').val()
    };
    $.post('../Cliente/php/task-add-cliente.php', postData, function(response){
        fetchCliente();
        $('#register-form-cliente').trigger('reset');
    });
    e.preventDefault();
});

$(document).on('click','.btnEliminar', function(){
    if(confirm('Estas seguro de Eliminar?')){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('taskId');
        $.post('../Cliente/php/task-delete-cliente.php',{id}, function(response){
            fetchCliente()
        })
    }
});

function fetchCliente(){
    $.ajax({
        url: '../Cliente/php/task-list-cliente.php',
        type: 'GET',
        success: function(response){
            let task = JSON.parse(response);
            let template = '';
            task.forEach(tasks =>{
                template +=`
                    <tr taskId="${tasks.id}">
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