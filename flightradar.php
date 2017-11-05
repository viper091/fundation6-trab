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
<br>
<div class="grid-container">

    <div class="grid-x grid-margin-x">
        <div class="cell small-4">
            <a class="twitter-timeline" href="https://twitter.com/flightradar24?ref_src=twsrc%5Etfw">Tweets by flightradar24</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </div>
        <div class="cell small-8">
            <div class="callout">
                <p>FlightRadar24 App</p>
              <!--  <iframe src="http://www.flightradar24.com/simple_index.php?lat=43.8&lon=-79.4&z=8" width="600" height="600"></iframe>
-->
			
		<iframe class='if' id="flight-radar" src="http://www.flightradar24.com/simple_index.php?lat=-27.399291&lon=153.110373&z=8" width="100%" height="100%"></iframe><div class="map-notice">Map supplied by <a href="http://flightradar24.com">FlightRadar24.com</a></div>
<!--                <iframe class="if" src="https://www.flightradar24.com/simple?reg=G-EZDL" width="100%" height="100%"></iframe>
-->
            </div>
        </div>
    </div>
</div>
<?php include 'footer.php'; ?>
<div class="modal"><!-- Place at bottom of page --></div>

<script src="js/vendor/jquery.js"></script>
<script src="js/vendor/what-input.js"></script>


<script src="app/index.js"></script>




</body>
</html>

