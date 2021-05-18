<?php
    include '../../Conexion/conexion.php';
    session_start();
    $idUsuario = $_SESSION['usuario'];
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $mensaje = $_POST['mensaje'];
        $query = "INSERT INTO history (id_people,id_attencion,`text`) VALUES ('$idUsuario','$id','$mensaje')";
        $result = $conexion->query($query);
        if($result){
            echo $id;
        }else {
            echo 'Faild';
        }
    }
?>