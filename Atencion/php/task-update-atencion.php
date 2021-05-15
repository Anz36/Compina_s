<?php
    include '../../Conexion/conexion.php';
    if(isset($_POST['id'])){
        $fecha_aviso = $_POST['fecha_aviso'];
        $tipo = $_POST['tipo'];
        $origen = $_POST['origen'];
        $status = $_POST['status'];
        $id = $_POST['id'];
        
        $query = "UPDATE details_attention SET date_notice = '$fecha_aviso', type_customers = '$tipo', origin = '$origen', `status` = '$status' WHERE id = '$id'";
        $result = $conexion->query($query);

        if($result){
            echo 'Success';
        } else {
            echo 'Error';
        }
    }
?>