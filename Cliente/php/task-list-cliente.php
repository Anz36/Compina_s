<?php

    function getNull($dato){
        include "../../Conexion/conexion.php";
        if($dato == null){
            return "Sin Dato";
        }else {
            $query = "SELECT name FROM business WHERE id = '$dato'";
            $result = $conexion->query($query)->fetch_array();
            return $result['name'];
        }
    }

    include "../../Conexion/conexion.php";
    $query = "SELECT * FROM customers ORDER BY id DESC";
    $result = $conexion->query($query);
    $json = array();
    while ($row = $result->fetch_array()){
        $json[] = array(
            'id' => $row['id'],
            'cliente' => $row['name'],
            'empresa' => getNull($row['business'])
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>