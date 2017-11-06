<?php
/**
 * Created by PhpStorm.
 * User: VitorEmanuel
 * Date: 24/10/2017
 * Time: 18:29
 */


$local = true;

$showerrors = true;
$conn = null;
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

