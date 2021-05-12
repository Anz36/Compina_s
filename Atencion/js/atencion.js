$.ajax({
    url: '../Atencion/php/task-list.php',
    type: 'GET',
    success: function(response){
        let task = JSON.parse(response);
        let template = '';
        task.forEach(tasks =>{
                        template +=`
                            <tr taskId="${tasks.id}">
                                <td><a  class = "btn btn-warning btnVer rounded-pill" data-toggle="modal" data-target="#myModalVer"> Ver  </a> </td>
                                <td><a  class = "btn btn-info btnEditar rounded-pill" data-toggle="modal" data-target="#myModalEditar"> Historial  </a> </td>
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