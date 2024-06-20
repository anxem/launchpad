<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $phrase = $_POST["phrase"];

    echo $phrase;
}
?>