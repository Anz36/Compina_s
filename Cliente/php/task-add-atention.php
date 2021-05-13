<?php

    function getBusiness($dato){
        include "../../Conexion/conexion.php";
        $query = "SELECT business FROM customers WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['business'];
    }
    include '../../Conexion/conexion.php';
    session_start();
    $idUsuario = $_SESSION['usuario'];
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $type = $_POST['type'];
        $origin = $_POST['origin'];
        $status = $_POST['status'];

        $business = getBusiness($id);

        $query = "INSERT INTO details_attention(people,business,customers,type_customers,origin,`status`)
        VALUES ('$idUsuario','$business','$id','$type','$origin','$status')";

        $result = $conexion->query($query);
        if ($result){
            echo 'Add';
        } else {
            echo 'Faild';
        }
            
    }
?>