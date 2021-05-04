<?php
    include "../../Conexion/conexion.php";
    $query = "SELECT * FROM customers ORDER BY id DESC";
    $result = $conexion->query($query);
    $json = array();
    while ($row = $result->fetch_array()){
        $json[] = array(
            'id' => $row['id'],
            'cliente' => $row['name'],
            'empresa' => $row['business']
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>