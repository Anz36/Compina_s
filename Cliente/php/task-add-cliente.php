<?php
     include "../../Conexion/conexion.php";
     if (isset($_POST['name'])){
         $name = $_POST['name'];
         $email = $_POST['email'];
         $telefono = $_POST['telefono'];
         $celular = $_POST['celular'];
         $direccion = $_POST['direccion'];
         $posicion = $_POST['posicion'];
         $distrito = $_POST['distrito'];
         $provincia = $_POST['provincia'];

         $query = "INSERT INTO customers(name, position, address, district, province, email, phone, movil) 
         VALUES ('$name', '$posicion', '$direccion', '$distrito', '$provincia', '$email', '$telefono', '$celular')";

         $result = $conexion->query($query);
         if ($result){
             echo "Task Add";
         } else {
             echo "Task Faild";
         }
     }
?>