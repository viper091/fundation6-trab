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

	<div id="barra" >
		<!-- <h4>Ferramente de busca de aeronave</h4> -->

		<div class="grid-container">

            <div class="grid-x">


                <div class="medium-1 medium-offset-11 cell">
                   <!--         AGUARDANDO SISTEMA DE AUTENTICAÇÃO



                    -->
                    <button class="button" data-open="addAir">Adicionar aeronave</button>

                </div>



            </div>
			<div class="grid-x grid-padding-x">
				<div class="medium-12 cell">
					<label>O que deseja encontrar?
						<input id="nome" type="text" placeholder="ex: Boeing 747">
					</label>

				</div>

				<div class="medium-1 cell large-offset-5">
					<button id="buscar" type="button" class="button">Buscar</button>
				</div>

			</div>
            <div class="grid-x grid-padding-x">
            <div class="medium-1 cell large-offset-11">
                <p style="font-size: 11px">Resultados  <b id="resultados"> 0 </b></p>
            </div>
            </div>
		</div>
		<br><br>
	</div>

	<div class="pesquisa">

		<table id="resultado" class="table-expand">
			<thead>
			<tr class="table-expand-row">
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



    <div class="reveal" id="addAirMsg" data-reveal>
        <h2>Resultado</h2>
        <hr>
        <h5 id="addAirMsgh2">!</h5>
        <button class="close-button" data-close aria-label="Close reveal" type="button">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

    <div class="reveal" id="addAir" data-reveal>
        <h1>Aeronave</h1>
        <div class="grid-container">
            <div id="c_img" class="grid-x grid-padding-x">
                <div class="medium-6 cell">
                    <label>Imagem atual
                        <img id="ad_img" src="./imgs/airplanes/not_found.jpg"  width="200" height="150">
                    </label>
                </div>
            </div>

            <div class="grid-x grid-padding-x">

                <div class="medium-7 cell">

                    <label>Nome
                        <input type="text" id="ad_nome" placeholder="ex: Boeing 747">

                    </label>

                </div>
                <div id="buscarnomegif" class="small-1 cell">
                    <img src="./imgs/ajax-loader.gif" width="16" height="16">
                </div>

                <div id="c_origem" class="medium-6 cell">
                    <label>Origem
                        <input type="text" id="ad_origem" placeholder="ex: Brasil">
                    </label>

                </div>

                <div id='c_tipo' class="medium-6 cell">
                    <label>Tipo
                        <input type="text" id="ad_tipo" placeholder="ex: Aviao de passageiros">
                    </label>
                </div>
            </div>
            <div id="c_sobre" class="grid-x grid-padding-x">
                <div class="medium-12 cell">
                    <label>
                        Sobre
                        <textarea  id="ad_sobre" rows="5"  placeholder="None"></textarea>
                    </label>
                </div>
            </div>
            <div id="c_adicionar" class="grid-x grid-padding-x">
                <div class="medium-6 cell">
                    <button id="addPlane" type="button" class="success button">Adicionar</button>
                </div>

            </div>


        </div>
        <button class="close-button" data-close aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>


    <?php include 'footer.php'; ?>

    <div class="modal"><!-- Place at bottom of page --></div>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/vendor/what-input.js"></script>
    <script src="js/vendor/foundation.min.js"></script>

    <script src="app/index.js"></script>
   <script src="app/add.js"></script>




  </body>
</html>
