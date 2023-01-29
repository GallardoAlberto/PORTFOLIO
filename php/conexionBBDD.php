<?php

    $server = 'localhost';
    $user = 'id20217472_root';
    $password = '63yY>eZED^*x7A_O';
    $bbdd = 'id20217472_portfolio';

    $connect = mysqli_connect($server, $user, $password, $bbdd);

    if(isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['email']) && isset($_POST['message'])){

        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Agrega un campo
        $addField = "INSERT INTO user(name,phone_number,email,message) VALUES('$name', '$phone', '$email', '$message')";

        // Ejecuta el agregar un campo en la BBDD especificada
        mysqli_query($connect,$addField);

        mysqli_close($connect);

        sleep(2);
        header("Location: ../index.html");
    }
?>