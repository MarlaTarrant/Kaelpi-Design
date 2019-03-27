<?php

    if (isset($_POST['submit'])) {

        var_dump($_POST);

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

