<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require "vendor/autoload.php";

//Check for post request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = $_POST['title'];
    $inputTextArea = $_POST['inputTextArea'];


$mail = new PHPMailer(true);

// $mail->SMTPDebug = SMTP::DEBUG_SERVER;
try {
    //Server settings
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Username = 'sparkeldear@gmail.com'; // Your Gmail address
$mail->Password = 'vkgn doxe thio xmkx'; // Your Gmail password
$mail->SMTPSecure = 'tls';
$mail->Port = 587;

// Recipients
$mail->setFrom('sparkeldear@gmail.com', 'Judith');
$mail->addAddress('nelsonkatrina21@gmail.com', 'Katrina');

// Content
$mail->isHTML(true);
$mail->Subject = "You've Got A New Form Submission.";
$mail->Body = "<b>Title: $title </b><br> phrase: $inputTextArea";

$mail->send();

http_response_code(200); //ok status
} catch (Exception $e) {
    http_response_code(500); //Internal server Error status
}
}
?>