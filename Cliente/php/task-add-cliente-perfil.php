<?php
    include '../../Conexion/conexion.php';
    function getIdCliente(){
        include '../../Conexion/conexion.php';
        $query = "SELECT * FROM customers WHERE active != 0 ORDER BY created_at DESC LIMIT 1";
        $result = $conexion->query($query)->fetch_array();
        return $result['id'];
    }
    $idCliente = getIdCliente();
    if(isset($idCliente)){
        $type = $_POST['type'];
        $politica = $_POST['politic'];
        $factura = $_POST['factures'];
        $pagos = $_POST['play'];
        $adicional = $_POST['adicion'];
        $jobs = $_POST['check'];

        if($jobs){
            $jobs = 1;
        } else {
            $jobs = 0;
        }
        $query = "INSERT INTO customers_perfil(id_customer, `type`, `politic_paymet`, supplier_job, facture, frequency_payment, special_text, id_business) 
        VALUES ('$idCliente', '$type', '$politica', '$jobs', '$factura', '$pagos', '$adicional')";
        
        $result = $conexion->query($query);
        if ($result){
            echo "Task Add";
        } else {
            echo "Task Faild";
        }
    }
?>