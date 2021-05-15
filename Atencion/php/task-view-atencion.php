<?php 
    
    include '../../Conexion/conexion.php';
    if(isset($_POST['id'])){
        $id = $_POST['id'];
        $query = "SELECT * FROM details_attention WHERE id = '$id'";
        $result = $conexion->query($query);
        $json = array();
        while($row = $result->fetch_array()){
            $json[] = array(
                'fecha' => $row['date_attention'],
                'tipo' => $row['type_customers'],
                'origen' => $row['origin'],
                'status' => $row['status'],
                'fecha_aviso' => $row['date_notice']
            );
        }
        echo json_encode($json[0]);
    }
?>