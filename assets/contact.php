<?php

    if (isset($_POST['submit'])) {

        var_dump($_POST);
        
        $mail->Host = 'smtp.gmail.com';

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "kaelpidesign@gmail.com";
        $subject = "New message from ".$name;
        $headers = "From: ".$email;
        $txt = "You have received an email from ".$name.$radio.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.html?mailsend");
    }
?>

