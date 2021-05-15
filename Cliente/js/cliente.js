
    fetchList();
    fetchCliente();
    fetchEmpresa();
    fetchUser();    

$('#searchCliente').keyup(function(){
    if(($('#searchCliente').val()) !== ""){
        let search = $('#searchCliente').val();
        $.ajax({
            url: '../Cliente/php/task-search.php',
            type: 'POST',
            data: {search},
            success: function(response){
                let task = JSON.parse(response);
                console.log('task');
                let template = '';
                task.forEach(tasks =>{
                    template +=`
                        <tr taskId="${tasks.id}">
                            <td><a  class = "btn btn-warning btnVer rounded-pill" data-toggle="modal" data-target="#myModalVer"> Ver  </a> </td>
                            <td><a  class = "btn btn-info btnEditar rounded-pill" data-toggle="modal" data-target="#myModalEditar"> Editar  </a> </td>
                            <td><a  class = "btn btn-danger btnEliminar rounded-pill"> Eliminar  </a> </td>
                            <td>${tasks.id}</td>
                            <td>${tasks.cliente}</td>
                            <td>${tasks.business}</td>
                        </tr>
                    `
                });
                $('#cotenidoCliente').html(template);
            }
        })
    } else {
        fetchList();
    }
});



$('#register-form-cliente').submit(function(e) {
    
    const postData = {
        name: $('#nameRegister').val(),
        email: $('#emailRegister').val(),
        telefono: $('#telefonoRegister').val(),
        celular: $('#celularRegister').val(),
        direccion: $('#direccionRegister').val(),
        posicion: $('#posicionRegister').val(),
        distrito: $('#distritoRegister').val(),
        provincia: $('#provinciaRegister').val(),
        empresa: $('#datoEmpresaRegister').val()
    };
    $.post('../Cliente/php/task-add-cliente.php', postData, function(response){
        fetchList();
        $('#register-form-cliente').trigger('reset');
    });
    e.preventDefault();
});

$(document).on('click','.btnCerrarSession', function(){
    $.ajax({
        url: '../Cliente/php/task-logout.php',
        type: 'GET',
        success: function(response){
            window.location.href = '../Login/';
        }
    });
});

$(document).on('click','.btnEliminar', function(){
    if(confirm('Estas seguro de Eliminar?')){
        let element = $(this)[0].parentElement.parentElement;
        let id = $(element).attr('taskId');
        $.post('../Cliente/php/task-delete-cliente.php',{id}, function(response){
            fetchCliente();
        })
    }
});

$(document).on('click','.btnVer', function(){
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('taskId');
    $.post('../Cliente/php/task-view-cliente.php', {id}, function(response){
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
    $.post('../Cliente/php/task-view-empresa.php', {id}, function(e){
        const task_business = JSON.parse(e);
        $('#razonSocialView').html(task_business.nameEmpresa);
        $('#rucView').val(task_business.ruc);
        $('#rubroView').val(task_business.rubro);
        $('#websiteView').val(task_business.page_web);
        $('#direccionEmpresaView').val(task_business.direccionEmpresa);
        $('#referenciaView').val(task_business.direccionEmpresaReference);
        $('#dateView').val(task_business.aniversario);
    });
});

$(document).on('click','.btnEditar',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('taskId');
    $.post('../Cliente/php/task-view-cliente.php', {id}, function(response){
        const task = JSON.parse(response);
        $('#clienteEdit').val(task.name);
        $('#emailEdit').val(task.email);
        $('#telefonoEdit').val(task.phone);
        $('#celularEdit').val(task.movil);
        $('#direccionEdit').val(task.address);
        $('#posicionEdit').val(task.position);
        $('#distritoEdit').val(task.district);
        $('#provinciaEdit').val(task.province);
        $('#idClienteEdit').val(task.id);
    });
    $.post('../Cliente/php/task-view-empresa.php', {id}, function(e){
        const task_business = JSON.parse(e);
        $('#datoEmpresaAll').val(task_business.id);
    });
});

$('#edit-form').submit(function(e){
    const postData = {
        name: $('#clienteEdit').val(),
        email: $('#emailEdit').val(),
        telefono: $('#telefonoEdit').val(),
        celular: $('#celularEdit').val(),
        direccion: $('#direccionEdit').val(),
        posicion: $('#posicionEdit').val(),
        distrito: $('#distritoEdit').val(),
        provincia: $('#provinciaEdit').val(),
        empresa: $('#datoEmpresaAll').val(),
        id: $('#idClienteEdit').val()
    };
    $.post('../Cliente/php/task-edit-cliente.php', postData, function(response){
        fetchList();
    });
    e.preventDefault();
});

$(document).on('click','.btnAtender',function(){
    let element = $(this)[0].parentElement.parentElement;
    let id = $(element).attr('taskId');
    $.post('../Cliente/php/task-view-atencion.php', {id}, function(response){
        const task = JSON.parse(response);
        $('#clienteName').html(task.nombre);
        $('#empresaName').html(task.empresas);
        $('#idAtender').val(task.id);
    });
});

$('#form-atencion').submit(function(e){
    const postData = {
        id: $('#idAtender').val(),
        type: $('#selectType').val(),
        origin: $('#selectOrigin').val(),
        status: $('#selectStatus').val()
    };
    $.post('../Cliente/php/task-add-atention.php', postData, function(response){
        if(response === 'Add'){
            window.location.href = "../../Atencion/";
        }
    });
});

function fetchCliente(){
    
    $('#mostrarDatos').change(function(){
        
        if ($('#mostrarDatos').val() !== ''){
            let limit = $('#mostrarDatos').val();
            $.ajax({
                url: '../Cliente/php/task-list-cliente.php',
                type: 'POST',
                data: {limit},
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
    });
    
}

function fetchList(){
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


function fetchEmpresa(){
    $.ajax({
        url: '../Cliente/php/task-list-empresa.php',
        type: 'GET',
        success: function(response){
            let task = JSON.parse(response);
            let template = '';
            task.forEach(tasks =>{
                template +=`
                    <option value="${tasks.id}">${tasks.empresa}</option>
                `
            });
            $('#datoEmpresaRegister').html(template);
            $('#datoEmpresaAll').html(template);
        }
    });
}

function fetchUser(){
    $.ajax({
        url: '../Cliente/php/task-search-user.php',
        type: 'GET',
        success: function(response){
            const task = JSON.parse(response);
            $('#userName').html(task.name);
            $('#userNameTwo').html(task.name);
            $('#userType').html(task.type);
        }
    });
}