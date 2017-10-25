<?php

include 'db.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['nome'];

if(isset($name)){

    $stmt = $conn->prepare("SELECT * from airplanes where name LIKE :name");
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->execute();
    $res = $stmt->fetchAll();
    echo json_encode($name);
}
//else echo json_encode(print_r($_POST));

//echo print_r($_POST);