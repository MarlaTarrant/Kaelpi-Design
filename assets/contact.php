<?php

    $result="";

    if (isset($_POST['submit'])) {
        require 'phpmailer/PHPMailerAutoload.php';
        $mail = new PHPMailer;

        $mail->Host='smtp.gmail.com';
        $mail->Port='587';
        $mail->SMTPAuth=true;
        $mail->SMTPSecure='tls';
        $mail->Username='tarrantmarlajean@gmail.com';
        $mail->Password='K@3lp1410961107';

        $mail->setFrom($_POST['email'],$_POST['name']);
        $mail->addAddress('no-reply@kaelpidesign.com');
        $mail->addReplyTo($_POST['email'],$_POST['name']);

        $mail->isHTML(true);
        $mail->Subject='Form Submission: '.$_POST['subject'];
        $mail->Body='<h1 align=center>Name :'.$_POST['name'].'<br>Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</h1>';

        if(!$mail->send()){
            $result="Something went wrong. Please try again.";
        }
        else {
            $result="Thanks ".$_POST['name']." for contacting us.";
        }
    }
?>

