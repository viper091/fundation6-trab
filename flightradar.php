<?php
/**
 * Created by PhpStorm.
 * User: VitorEmanuel
 * Date: 31/10/2017
 * Time: 20:55
 */

?>
<?php include 'db.php' ?>

<!doctype html>
<html class="no-js" lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mundo aviação</title>
    <link rel="stylesheet" href="css/foundation.min.css">

    <link rel="stylesheet" href="app/style.css">
</head>
<body>
<?php include 'nav.php' ?>

<div class="callout">





    <iframe class="if" src="https://www.flightradar24.com/simple?reg=G-EZDL" width="100%" height="100%"></iframe>

</div>
<?php include 'footer.php'; ?>
<div class="modal"><!-- Place at bottom of page --></div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>


<script src="app/index.js"></script>




</body>
</html>

