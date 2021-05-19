<?php
    include '../../Conexion/conexion.php';
    if (isset($_POST['id'])){
        $id = $_POST['id'];
        
        $query = "UPDATE details_attention SET active = 0 WHERE id = '$id'";
        $result = $conexion->query($query);
        
        if ($result){
            echo 'Success';
        } else {
            echo 'Failed';
        }
    }
?>