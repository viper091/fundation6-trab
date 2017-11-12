/**
 * Created by VitorEmanuel on 11/11/2017.
 */

var saaa;
$(document).ready(function () {
    function wikipediainfo(id, nome, api){

        wikiURL = api;
        wikiURL += '?' + $.param({
                'action' : 'query',
                'titles' : nome,
                'prop'  : 'extracts',
                'explaintext' : '0',
                'exintro' : '1',
                'format' : 'json'
            });

        $.ajax( {
            url: wikiURL,
            dataType: 'jsonp',
            async: true,
            success: function(data) {
                for( var page in data.query.pages) {
                    info = data.query.pages[page].extract;
                    if (info != null) {
                        $('#' + id).html(info);

                    }
                }



            }
        } );
    }
    function wikipediainfoexists( nome, api,callback){

        wikiURL = api;
        wikiURL += '?' + $.param({
                'action' : 'opensearch',
                'search' : nome,
                'profile':'normal',
                'redirects':'resolve',
                'format' : 'json'
            });
        aaa = wikiURL;
        $.ajax( {
            url: wikiURL,
            dataType: 'jsonp',

            success: function(data) {
                for( var id in data) {
                    //info = data.query.pages[page].extract;
                    info = data[1][0];
                    callback(info);
                    break;

                }



            }
        } );
    }
    function buscar_img(nome){
        wikiURL = "https://en.wikipedia.org/w/api.php";
        wikiURL += '?' + $.param({
                'action' : 'query',
                'titles' : nome,
                'prop'  : 'pageimages',
                'format' : 'json',
                'pithumbsize' : '200'
            });
        $.ajax( {
            url: wikiURL,
            dataType: 'jsonp',
            async: true,
            success: function(data) {
                var el =  $('#ad_img');

                for (var page in data.query.pages) {
                    if(page && data.query.pages[page].thumbnail) {
                        el.attr('src', data.query.pages[page].thumbnail['source']);
                        $('#ad_img').show();
                        $('#c_img').show();

                    }

                }

            }
        } );

    }
    function buscar_info(nome) {

        var id = 'ad_sobre';
        wikipediainfoexists( nome, "https://pt.wikipedia.org/w/api.php", function (info) {
            if(info.length > 0)
                wikipediainfo(id, info, "https://pt.wikipedia.org/w/api.php");
            else
                wikipediainfo(id, info, "https://en.wikipedia.org/w/api.php");
        });



    }
    function buscaraviao(nome){
        $("#ad_nome").val(nome);
        buscar_img(nome);
        buscar_info(nome);
    }

    function mostrarcampos(){

        $("#c_origem").fadeIn(1000);
        $("#c_tipo").fadeIn(1000);
        $("#c_adicionar").fadeIn(1000);
        $("#c_sobre").fadeIn(1000);

    }
    function escondercampos(){

        $("#c_origem").fadeOut(555);
        $("#c_tipo").fadeOut(555);
        $("#c_adicionar").fadeOut(555);
        $("#c_img").fadeOut(555);
        $("#c_sobre").fadeOut(555);
    }
        var buscargif_original=null;
    function obternomecorreto(valor){
        if(buscargif_original == null){
            buscargif_original = $("#buscarnomegif ").html();
            saaa = buscargif_original;
        }
        if(buscargif_original!=null){

            $("#buscarnomegif span").replaceWith(buscargif_original);
        }
        $("#buscarnomegif").show();
        wikipediainfoexists(valor, "https://en.wikipedia.org/w/api.php", function(info){


            if(info==null)
            {
                wikipediainfoexists(valor, "https://pt.wikipedia.org/w/api.php", function(info){
                    if(info==null)
                    {
                        $("#buscarnomegif img").replaceWith('<span class="alert label">Essa aeronave<br> não existe</span>');
                        escondercampos();
                        //$("#buscarnomegif").show();

                    }
                    else {
                        verificarnome( info);
                        // $("#buscarnomegif").hide();
                    }
                });

            }
            else {


                verificarnome(info);
                // $("#buscarnomegif").hide();
            }

        });

    }
    function verificarnome( valor){

        var data = {
            "nome": valor

        };
        console.log(data);
        $.ajax({
            method:'post',
            //contentType: "charset=UTF-8",
            url: 'verificarnome.php',
            async: true,
            data: data,
            dataType:'json',
            error:function(  jqXHR,  textStatus,  errorThrown ){

                $("#buscarnomegif").hide();
            },
            success: function (response) {

//                $("#buscarnomegif").hide();

                if(response == 1){

                    $("#buscarnomegif img").replaceWith('<span class="alert label">Nome ja <br> existente</span>');
                    escondercampos();
                }else{
                    $("#buscarnomegif img").replaceWith('<span class="success label">Confirmado</span>');
                    mostrarcampos();
                    buscaraviao(info);
                }
            }

        });
    }

    var oldvals = null;
    $("#ad_nome").focusout(function () {

        var valor = $(this).val();
        var tamanho = valor.length;

        if (tamanho > 0 && valor != oldvals ) {


            obternomecorreto(valor);
           // verificarnome(valor);
            //alert($(this).val());
            oldvals = valor;
        }


    });


    $("#addPlane").click(function(){




        var data = {
            nome: $('#ad_nome').val(),
            origem: $('#ad_origem').val(),
            tipo: $('#ad_tipo').val(),
            sobre: $('#ad_sobre').val()
        };

        $.ajax({
            method:'post',
            dataType:'json',
            contentType: "application/json;charset=UTF-8",
            url: 'dados.php',
            async: true,
            data: JSON.stringify(data),
            success: function (response) {

                var msg = '';
                if(response.id){

                    msg='Aeroplano adicionado ao banco de dados com sucesso ';
                }
                else msg=response.msg;


                $('#addAirMsg').foundation('open');
                $('#addAirMsgh2').text(msg);
            }

        });
    });

});