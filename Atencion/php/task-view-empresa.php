<?php 
    function getIdEmpresa($dato){
        include '../../Conexion/conexion.php';
        $query = "SELECT * FROM details_attention WHERE id = '$dato'";
        $result = $conexion->query($query)->fetch_array();
        return $result['id_business'];
    }

    include '../../Conexion/conexion.php';
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $idBusiness = getIdEmpresa($id);
        $query = "SELECT * FROM business WHERE id = '$idBusiness'";
        $result = $conexion->query($query);
        $json = array();
        while($row = $result->fetch_array()){
            $json[] = array(
                'nameEmpresa' => $row['name'],
                'ruc' => $row['ruc'],
                'rubro' => $row['rubro'],
                'direccionEmpresa' => $row['address'],
                'direccionEmpresaReference' => $row['reference'],
                'aniversario' => $row['anniversary'],
                'page_web' => $row['page']
            );
        }
        echo json_encode($json[0]);
    }
?>