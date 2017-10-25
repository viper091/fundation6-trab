<?php
/**
 * Created by PhpStorm.
 * User: VitorEmanuel
 * Date: 24/10/2017
 * Time: 18:29
 */
$showerrors = true;
$servername = "localhost";
$username = "root";
$password = "vitor";
$dbname = "trabDB";

$conn = null;
try{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname",$username,
        $password,array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION ));

}
catch(PDOException $ex)
{
    if($showerrors) {
        $msg = $ex->getMessage();
        setcookie('msg', $msg);

    }
    header("Location: error.html");

    die();
}
