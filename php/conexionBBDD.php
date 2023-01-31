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

        $myemail = "gallardo.alb.1998@gmail.com";
        $subject = "Portfolio - Formulario";
        $message = "
        <html>
            <head>
            <title>Mensaje del Portfolio</title>
            <style>
                table {
                    border-collapse: collapse;
                }
                th, td {
                    border: 1px solid black;
                    padding: 8px;
                }
            </style>
            </head>
            <body>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>E-mail</th>
                        <th>Mensaje</th>
                    </tr>
                    <tr>
                        <td>$name</td>
                        <td>$phone</td>
                        <td>$email</td>
                        <td>$message</td>
                    </tr>
                </table>
            </body>
        </html>
        ";

        // Cabecera para indicar que es un correo HTML
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: $email" . "\r\n";

        // Enviar el correo
        mail($myemail,$subject,$message,$headers);

        sleep(2);
        header("Location: ../index.html");
    }
?>