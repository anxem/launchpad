<?php

$title = $_POST["title"];
$phrase = $_POST["phrase"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = 'smtp.gmail.com';
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Username = 'sparkeldear@gmail.com'; // Your Gmail address
$mail->Password = 'magni324y'; // Your Gmail password
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Recipients
$mail->setFrom('sparkeldear@gmail.com', 'Judith');
$mail->addAddress('nelsonkatrina21@gmail.com', 'Katrina');

// Content
$mail->isHTML(true);
$mail->Subject = "You've Got A New Form Submission.";
$mail->Body = "Title: $title
                phrase: $phrase";

$mail->send();

header("Location: TECHNICAL.html");
    