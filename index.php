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


            <div class="grid-container">
                <div class="grid-x grid-padding-x">
                    <div class="medium-12 cell">
                        <label>Nome do Vetor ( Aeronave )
                            <input id="nome" type="text" placeholder="ex: Boeing 747">
                        </label>

                    </div>
                    <div class="medium-1 cell large-offset-6 cell">
                        <button id="buscar" type="button" class="button">Buscar</button>
                    </div>

                    <div class="medium-1 cell large-offset-11 cell">
                        <p style="font-size: 11px">Resultados  <b id="resultados"> 0 </b></p>

                    </div>
                </div>
            </div>

    </div>


    <div class="pesquisa">

        <table id="resultado">
            <thead>
            <tr>
                <th width="100"></th>
                <th width="100">Nome</th>
                <th width="100">Origem</th>
                <th width="100">Tipo</th>

            </tr>
            </thead>
            <tbody>


            </tbody>
        </table>

        <div class="grid-container" id="resultado">

        </div>

        <div id="nada_encontrado" class="grid-container">
            <div class="grid-x grid-padding-x">
                <div class="medium-12 cell">
                    <h3>Nada encontrado</h3>
                </div>
            </div>
        </div>
    </div>




    <div class="modal"><!-- Place at bottom of page --></div>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>

    <script src="app/index.js"></script>


  </body>
</html>
