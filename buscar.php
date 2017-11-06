<?php

include 'db.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['nome'] ;

//resultado da pesquisa



if(isset($name)){

    $stmt = $conn->prepare("SELECT * from airplanes where nome  LIKE CONCAT('%', :name,'%')  or tipo LIKE CONCAT('%', :name,'%') or origem LIKE CONCAT('%', :name,'%') ");
    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($res);
}



echo print_r($_POST);