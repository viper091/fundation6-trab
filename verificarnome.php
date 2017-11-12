<?php
/**
 * Created by PhpStorm.
 * User: VitorEmanuel
 * Date: 08/11/2017
 * Time: 20:25
 */

/* verifica se determinada aeronave ja esta presente no banco de dados */


$nome = $_POST['nome'];


if(isset($nome)){

    include 'db.php';

    $stmt = $conn->prepare("select count(nome) from airplanes where nome = :nome");
    $stmt->bindParam(':nome', $nome, PDO::PARAM_STR);
    $stmt->execute();

    $res =$stmt->fetch(PDO::FETCH_COLUMN);

    if($res == 0) {
        echo '0';
    }
    else {
        echo '1';
    }


}
