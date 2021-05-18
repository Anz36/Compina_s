<?php
    include "../../Conexion/conexion.php";
    $query = "SELECT * FROM requirements ORDER BY created_at DESC";
    $result = $conexion->query($query);
    $json = array();
    while ($row = $result->fetch_array()){
            $json[] = array(
                'empresa' => $row['business'],
                'cliente' => $row['name'],
                'email' => $row['email'],
                'telefono' => $row['phone'],
                'mensaje' => $row['message'],
                'fecha' => $row['created_at'],
                'website' => $row['page_web']
            );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>