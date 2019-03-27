<?php

    if (isset($_POST['submit'])) {

        var_dump($_POST);

        $mail->Host='mail.margineco.com';
        $mail->Port='587';
        $mail->SMTPAuth=true;
        $mail->SMTPSecure='tls';
        $mail->Username='marla@margineco.com';
        $mail->Password='iYEYl4B#*0*';

        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "marla@margineco.com";
        $subject = "New message from ".$name;
        $headers = "From: ".$email;
        $txt = "You have received an email from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.html?mailsend");
    }
?>

