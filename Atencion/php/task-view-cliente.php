<?php 
    function getIdCliente($dato){
        include '../../Conexion/conexion.php';
        $query = "SELECT * FROM details_attention WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['id_customer'];
    }

    include '../../Conexion/conexion.php';
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $idCliente = getIdCliente($id);
        $query = "SELECT * FROM customers WHERE id = '$idCliente'";
        $result = $conexion->query($query);
        $json = array();
        while($row = $result->fetch_array()){
            $json[] = array(
                'name' => $row['name'],
                'position' => $row['position'],
                'address' => $row['address'],
                'district' => $row['district'],
                'province' => $row['province'],
                'email' => $row['email'],
                'phone' => $row['phone'],
            );
        }
        echo json_encode($json[0]);
    }
?>