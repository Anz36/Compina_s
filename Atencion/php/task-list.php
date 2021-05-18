<?php

    function getPersonal($dato){
        include '../../Conexion/conexion.php';
        $query = "SELECT * FROM people WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['name'];
    }

    function getEmpresa($dato){
        include '../../Conexion/conexion.php';
        $query = "SELECT * FROM business WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['name'];
    }

    function getCliente($dato){
        include '../../Conexion/conexion.php';
        $query = "SELECT * FROM customers WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['name'];
    }

    function getFecha($dato){
        if($dato == null){
            return 'Por definir';
        } else {
            return $dato;
        }
        
    }

    include '../../Conexion/conexion.php';
    $query = "SELECT * FROM details_attention ORDER BY id DESC";
    $result = $conexion->query($query);
    $json = array();
    while ($row = $result->fetch_array()){
        $json[] = array(
            'personal' => getPersonal($row['id_people']),
            'empresas' => getEmpresa($row['id_business']),
            'cliente' => getCliente($row['id_customer']),
            'fecha' => $row['created_at'],
            'fecha_aviso' => getFecha($row['date_notice']),
            'tipo' => $row['type'],
            'Origen' => $row['origin'],
            'estado' => $row['status'],
            'id' => $row['id']
        );
    }
    echo json_encode($json);
?>