<?php

include 'db.php';
$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['nome'] ;

//resultado da pesquisa



/*
 *  procura em 3 colunas(nome, tipo, origem) e retorna as aeronaves mais parecidas com o valor pesquisado
 *
 */
if(isset($name)){

    $stmt = $conn->prepare("SELECT * from airplanes where nome  LIKE CONCAT('%', :name,'%')  or tipo LIKE CONCAT('%', :name2,'%') or origem LIKE CONCAT('%', :name3,'%') ");

    $stmt->bindParam(':name', $name, PDO::PARAM_STR);
    $stmt->bindParam(':name2', $name, PDO::PARAM_STR);
    $stmt->bindParam(':name3', $name, PDO::PARAM_STR);
    $stmt->execute();
    $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($res);
}



