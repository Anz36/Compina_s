<?php
    include "../../Conexion/conexion.php";
    $query = "SELECT * FROM requirements ORDER BY requirements_date DESC";
    $result = $conexion->query($query);
    $json = array();
    while ($row = $result->fetch_array()){
            $json[] = array(
                'empresa' => $row['business'],
                'cliente' => $row['name'],
                'email' => $row['email'],
                'telefono' => $row['phone'],
                'mensaje' => $row['message'],
                'fecha' => $row['requirements_date'],
                'website' => $row['site_web']
            );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>