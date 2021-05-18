<?php
     include "../../Conexion/conexion.php";
     if (isset($_POST['name'])){
         $name = $_POST['name'];
         $email = $_POST['email'];
         $telefono = $_POST['telefono'];
         $direccion = $_POST['direccion'];
         $posicion = $_POST['posicion'];
         $distrito = $_POST['distrito'];
         $provincia = $_POST['provincia'];
         $empresa = $_POST['empresa'];

         $query = "INSERT INTO customers(`name`, position, `address`, district, province, email, phone, id_business) 
         VALUES ('$name', '$posicion', '$direccion', '$distrito', '$provincia', '$email', '$telefono', '$empresa')";

         $result = $conexion->query($query);
         if ($result){
             echo "Task Add";
         } else {
             echo "Task Faild";
         }
     }
?>