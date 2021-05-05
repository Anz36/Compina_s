

    $.ajax({
        url: '../Requerimientos/php/task-list-requerimientos.php',
        type: 'GET',
        success: function(response){
            let task = JSON.parse(response);
            let template = '';
            task.forEach(tasks =>{
                template +=`
                    <tr>
                        <td>${tasks.empresa}</td>
                        <td>${tasks.cliente}</td>
                        <td>${tasks.email}</td>
                        <td>${tasks.telefono}</td>
                        <td>${tasks.mensaje}</td>
                        <td>${tasks.fecha}</td>
                        <td>${tasks.website}</td>
                    </tr>
                `
            });
            $('#cotenidoRequerimientos').html(template);
        }
    });