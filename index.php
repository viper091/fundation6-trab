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

        <form>
            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-12 cell">
                        <label>Nome do Vetor ( Aeronave )
                            <input id="nome" type="text" placeholder="ex: Boeing 747">
                        </label>

                    </div>
                    <div class="medium-6 cell large-offset-6 cell">
                      <button id="buscar" type="button" class="button">Buscar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>



    <div class="pesquisa">

        <table>
            <thead>
            <tr>
                <th width="200">Table Header</th>
                <th>Table Header</th>
                <th width="150">Table Header</th>
                <th width="150">Table Header</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Content Goes Here</td>
                <td>This is longer content Donec id elit non mi porta gravida at eget metus.</td>
                <td>Content Goes Here</td>
                <td>Content Goes Here</td>
            </tr>

            </tbody>
        </table>

    </div>

    <div class="modal"><!-- Place at bottom of page --></div>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>

    <script src="app/indexjs.js"></script>


  </body>
</html>
