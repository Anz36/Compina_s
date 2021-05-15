<?php
    function getEmpresa($dato){
        include ("../../conexion/conexion.php");
        $query = "SELECT * FROM customers WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['business'];
    }

    $id = $_POST['id'];
    $idEmpresa = getEmpresa($id);

    include("../../conexion/conexion.php");
    if($idEmpresa == null){
        $query = "SELECT * FROM business WHERE id = '5'";
        $result = $conexion->query($query);
        $json = array();
        while ($row = $result->fetch_array()){
            $json[] = array(
                'nameEmpresa' => $row['name'],
                'ruc' => $row['ruc'],
                'rubro' => $row['rubro'],
                'direccionEmpresa' => $row['address'],
                'direccionEmpresaReference' => $row['address_reference'],
                'aniversario' => $row['anniversary'],
                'page_web' => $row['page_web'],
                'id' => $row['id']
            );
        }
        $jsonstring = json_encode($json[0]);
        echo $jsonstring;
    }else {
        $query = "SELECT * FROM business WHERE id = '$idEmpresa'";
        $result = $conexion->query($query);
        $json = array();
        while ($row = $result->fetch_array()){
            $json[] = array(
                'nameEmpresa' => $row['name'],
                'ruc' => $row['ruc'],
                'rubro' => $row['rubro'],
                'direccionEmpresa' => $row['address'],
                'direccionEmpresaReference' => $row['address_reference'],
                'aniversario' => $row['anniversary'],
                'page_web' => $row['page_web'],
                'id' => $row['id']
            );
        }
        $jsonstring = json_encode($json[0]);
        echo $jsonstring;
    }
    

?>