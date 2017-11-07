<?php
/**
 * Created by PhpStorm.
 * User: VitorEmanuel
 * Date: 24/10/2017
 * Time: 18:29
 */

/*
 *
 * para facilitar a troca entre o servidor local e o azure
 *
 *
 * quando o projeto estive em um servidor local, altera o valor de $local para true
 *
 */

$local = false;

$showerrors = true;
$conn = null;

/*
 *
 * configure senha e usuario do banco de dados
 *
 */
if($local) {

    /* local */
    $servername = "localhost";
    $username = "root";
    $password = "vitor";
    $dbname = "trabDB";

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

}
else{

/*
 *
 *  usado apenas na fase final do proejto
 */


    /* azure */
    $servername = "mundoaviacao.database.windows.net";
    $username = "vitor";
    $password = "30221505aA@";
    $dbname = "mundoaviacao";

    try{
        $conn = new PDO("sqlsrv:server=$servername;Database=$dbname",$username,
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


}

