<?php
    include ("../Conexion/conexion.php");
    session_start();  
    $_SESSION['usuario'] = "-1";  
    $usuario=$_POST['usuario'];
    $password=md5($_POST['password']);
    $sql = "SELECT * FROM users where user_login = '$usuario' and password = '$password'";
    $result = mysqli_query($conexion,$sql);

    while($datos = mysqli_fetch_array($result)){
        $_SESSION['usuario'] = $datos['people'];
        $_SESSION['type'] = $datos['type_user'];
    }
    
    if($_SESSION['usuario']!= "-1"){
        header("Location: ../Cliente");
    }
    else{
        header("Location: ../Login/?mensaje=Datos incorrectos");
    } 
?>