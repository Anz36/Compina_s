<?php
    include '../../Conexion/conexion.php';
    if (isset($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $telefono = $_POST['telefono'];
        $celular = $_POST['celular'];
        $direccion = $_POST['direccion'];
        $posicion = $_POST['posicion'];
        $distrito = $_POST['distrito'];
        $provincia = $_POST['provincia'];

        $query = "UPDATE customers SET name='$name',position='$posicion',address='$direccion',district='$distrito',
        province='$provincia',email='$email',phone='$telefono',movil='$celular' WHERE id = '$id' ";
        $result = $conexion->query($query);
        if ($result){
            echo "Edit Success";
        } else {
            echo "Edit fail";
        }
    }
?>