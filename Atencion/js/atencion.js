
fetchListAtencion();

$(document).on('click', '.btnVerAtencion',function() {
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('taskId');
    $.post('../Atencion/php/task-view-cliente.php', {id}, function(response){
        const task = JSON.parse(response);
        $('#clienteView').html(task.name);
        $('#emailView').val(task.email);
        $('#telefonoView').val(task.phone);
        $('#celularView').val(task.movil);
        $('#direccionView').val(task.address);
        $('#posicionView').val(task.position);
        $('#distritoView').val(task.district);
        $('#provinciaView').val(task.province);
    });
    $.post('../Atencion/php/task-view-empresa.php', {id}, function(e){
        const task_business = JSON.parse(e);
        $('#razonSocialView').html(task_business.nameEmpresa);
        $('#rucView').val(task_business.ruc);
        $('#rubroView').val(task_business.rubro);
        $('#websiteView').val(task_business.page_web);
        $('#direccionEmpresaView').val(task_business.direccionEmpresa);
        $('#referenciaView').val(task_business.direccionEmpresaReference);
        $('#dateView').val(task_business.aniversario);
    });
    $.post('../Atencion/php/task-view-atencion.php',{id}, function(response){
        const task_atencion = JSON.parse(response);
        $('#fechaAtecnion').val(task_atencion.fecha);
        $('#selectType').val(task_atencion.tipo);
        $('#selectOrigin').val(task_atencion.origen);
        $('#selectStatus').val(task_atencion.status);
        $('#fechaAviso').val(task_atencion.fecha_aviso);
    });
    $('#idUpdate').val(id);
});
$(document).on('click','.btnHistorial',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('taskId');
    fetchHistorial(id);
    $('#idDato').val(id);
});

$('#form-update-atencion').submit(function(e){
    const postData = {
        fecha_aviso: $('#fechaAviso').val(),
        tipo: $('#selectType').val(),
        origen: $('#selectOrigin').val(),
        status: $('#selectStatus').val(),
        id: $('#idUpdate').val()
    }
    $.post('../Atencion/php/task-update-atencion.php',postData, function(response){
        if (response === 'Success'){
            fetchListAtencion();
        }
    });
    e.preventDefault();
});

$('#from-historial').submit(function(e) {
    const postData = {
        mensaje: $('#mensaje').val(),
        id: $('#idDato').val()
    };
    $.post('../Atencion/php/task-add-historial.php', postData,function(response){
        if(response === 'Faild'){
            $('#from-historial').trigger('reset');    
        } else {
            fetchHistorial(response);
            $('#from-historial').trigger('reset');
            
        }
    });
    e.preventDefault();
    
});

function fetchListAtencion(){
    $.ajax({
        url: '../Atencion/php/task-list.php',
        type: 'GET',
        success: function(response){
            let task = JSON.parse(response);
            let template = '';
            task.forEach(tasks =>{
                            template +=`
                                <tr taskId="${tasks.id}">
                                    <td><a  class = "btn btn-warning btnVerAtencion rounded-pill" data-toggle="modal" data-target="#myModalVerAtencion"> Ver/Editar  </a> </td>
                                    <td><a  class = "btn btn-info btnHistorial rounded-pill" data-toggle="modal" data-target="#myModalHistorial"> Historial/Editar  </a> </td>
                                    <td><a  class = "btn btn-success btnEliminar rounded-pill"> Completar  </a> </td>
                                    <td>${tasks.personal}</td>
                                    <td>${tasks.empresas}</td>
                                    <td>${tasks.cliente}</td>
                                    <td>${tasks.fecha}</td>
                                    <td>${tasks.fecha_aviso}</td>
                                    <td>${tasks.tipo}</td>
                                    <td>${tasks.Origen}</td>
                                    <td>${tasks.estado}</td>
                                </tr>
                            `
                        });
                $('#cotenidoAtencion').html(template);
        }
    });
}

function fetchHistorial(id){
    $.ajax({
        url: '../Atencion/php/task-list-historial.php',
        type: 'GET',
        data: {id},
        success: function(response){
            let task = JSON.parse(response);
            let template = '';
            task.forEach(tasks =>{
                            template +=`
                            <div class="row border border-5 py-3 mb-2">
                                    <div class="col-auto">
                                        <label for="">Usuario : <span class="badge badge-secondary">${tasks.usuario}</span></label>
                                    </div>
                                    <div class="col-auto">
                                        <label for="">Fecha : <span class="badge badge-secondary">${tasks.fecha}</span></label>
                                    </div>
                                    <div class="col-12 form-group mb-2">
                                        <textarea class="form-control" rows="3">${tasks.mensaje}</textarea>
                                    </div>
                                </div>
                                
                            `
                        });
                $('#viewHistoria').html(template);
        }
    });
}