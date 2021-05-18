<?php

    function getUser($dato){
        include '../../Conexion/conexion.php';
        $query = "SELECT * FROM people WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['name'].' '.$result['last_name'];
    }
    
    include '../../Conexion/conexion.php';
    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $query = "SELECT * FROM history WHERE id_attencion = '$id' ORDER BY created_at DESC";
        $json = array();
        $result = $conexion->query($query);
        while ($row = $result->fetch_array()){
            $json[] = array(
                'usuario' => getUser($row['id_people']),
                'fecha' => $row['created_at'],
                'mensaje' => $row['text']
            );
        }
        echo json_encode($json);
    }
?>