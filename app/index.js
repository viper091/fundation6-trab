/**
 * Created by VitorEmanuel on 24/10/2017.
 */
$(document).foundation();
$body = $("body");
var aaa;
function clean(filename) {
    filename= filename.split(/[^a-zA-Z0-9\-\_\.]/gi).join('_');
    return filename;
}

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
    aaa = wikiURL;
    $.ajax( {
        url: wikiURL,
        dataType: 'jsonp',
        async: true,
        success: function(data) {
            for( var page in data.query.pages) {
                info = data.query.pages[page].extract;
                $('#' + id).html(info);
            }



        }
    } );
}
function wikipediadata(id,nome){

     wikiURL = "https://pt.wikipedia.org/w/api.php";
    wikiURL += '?' + $.param({
            'action' : 'query',
            'titles' : nome,
            'prop'  : 'extracts',
            'explaintext' : '0',
            'exintro' : '1',
            'format' : 'json'
        });
    aaa = wikiURL;
    $.ajax( {
        url: wikiURL,
        dataType: 'jsonp',
        async: true,
        success: function(data) {
            for( var page in data.query.pages) {
                var info = data.query.pages[page].extract;


                if(info == null){

                    wikipediainfo(id, nome,"https://en.wikipedia.org/w/api.php");
                    //console.log(info);
                }
                else {
                    $('#' + id).html(info);
                }
            }



        }
    } );

    wikiURL = "https://en.wikipedia.org/w/api.php";
    wikiURL += '?' + $.param({
            'action' : 'query',
            'titles' : nome,
            'prop'  : 'pageimages',
            'format' : 'json',
            'pithumbsize' : '100'
        });
    aaa = wikiURL;
    $.ajax( {
        url: wikiURL,
        dataType: 'jsonp',
        async: true,
        success: function(data) {
            var el =  $('#'+id+'s');
            //$('#'+id+'s').attr("src",data);
            if($(el).length) {
                for (var page in data.query.pages) {
                    if(page && data.query.pages[page].thumbnail)
                    el.attr('src', data.query.pages[page].thumbnail['source']);

                    //     alert(data.query.pages[page].thumbnail['source']);
                }
            }
                //alert(id);
            //    alert(data.query.pages[page].extract);
              aaa = data;

        }
    } );
}

function showResults(response) {

    $('#resultado tbody').find('tr,p').remove();
//    $('#resultado').show();
    $('#nada_encontrado').hide();

    if(response.length == 0){

        $('#resultado').hide();
        $('#nada_encontrado').show();
        return false;
    }
    $('#resultados').html(response.length);
    var nn = 0;
    if(response.length > 1)
     nn = Math.floor(Math.random() * response.length-1);

    for(var i =0; i<response.length; i++){


        var aero = response[i];
        //var nname = aero.nome.replace(/ /g,'')
        var nname = clean(aero.nome);

        var img="";
        if(aero.img.length == 0) {

            img = "<img class='thumbnail' id='"+nname+'s'+"' height='140' width='190' src='./imgs/airplanes/not_found.jpg'></img>";

        }
        else img =  "<img class='thumbnail' height='140' width='190' src='./imgs/airplanes/"+aero.img+"'></img>";
        $('#resultado tbody').append(" <tr class='table-expand-row' data-open-details>" +
            "<td>"+img+"</td>" +
            "<td>"+aero.nome+"</td>" +
            "<td>"+aero.origem+"</td>" +
            "<td>"+aero.tipo+"<span class='expand-icon'></span></td>" +

            "</tr>" +
           "<tr class='table-expand-row-content'>"+
            "<td colspan='8' class='table-expand-row-nested' id='"+ nname  +"'></td>" +
            "</tr>"

        );

        if(i == nn)
        {
            changeBackground(aero.nome);
        }
        wikipediadata(nname,aero.nome);

        $('#resultado').fadeIn(1000);
    }
}



$(document).ready(function() {


    $("#addPlane").click(function(){

        var data = {
            nome: $('#ad_nome').val(),
            origem: $('#ad_origem').val(),
            tipo: $('#ad_tipo').val()
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


    $('#buscar').click(function () {

        $('#resultados').text('0');

        var data = {
            nome: $('#nome').val()
        }

        if(data.nome.length < 3) {
            $('#resultado').hide();
            $('#nada_encontrado').show();
            return false;
        }
        //var data =  "{'nome':'"+ $('#nome').val()  +"'}";
        console.log(data);
        $.ajax({
            method:'post',
            dataType:'json',
            contentType: "application/json;charset=UTF-8",
            url: 'buscar.php',
            async: true,
            data: JSON.stringify(data),
            success: function (response) {
          //      location.reload();
                //console.log(response);

                showResults(response);
            }

        });

        return false;
    });

    $('#nome').keypress(function(e){
        if(e.which==13) {

            $('#buscar').click();
        }
    });

});

function changeBackground(nome){

    wikiURL = "https://en.wikipedia.org/w/api.php";
    wikiURL += '?' + $.param({
            'action' : 'query',
            'titles' : nome,
            'prop'  : 'pageimages',
            'format' : 'json',
            'pithumbsize' :'1000'
        });
    aaa = wikiURL;
    $.ajax( {
        url: wikiURL,
        dataType: 'jsonp',
        async: true,
        success: function(data) {
            for (var page in data.query.pages) {
                if (page && data.query.pages[page].thumbnail) {
                   var imgurl = data.query.pages[page].thumbnail['source'];
              //      aaa =  data.query.pages[page];
                   $('#barra').css('background','url(' + imgurl + ')' );
                   $('#barra').css('background-size','cover');
                    $('#barra').css('background-position','center');
                    $('#barra').css('background-repeat','no-repeat');


                }
                //     alert(data.query.pages[page].thumbnail['source']);
            }


        }
    } );
}


$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
    ajaxStop: function() {

        $('[data-open-details]').click(function (e) {
            e.preventDefault();
            $(this).next().toggleClass('is-active');
            $(this).toggleClass('is-active');
        });
        $body.removeClass("loading");

    }




});
/*
$('tr').hover( function(){
    if( $(this).hasClass('jaf')) return false;
    //    alert($(this).attr('id'));
    // $('table tr td:nth-child('+ownerIndex+')')
    var airname = $(this).children(1)[1].innerText;
    if(airname.length < 3) return false;
    console.log(airname);

    $(this).addClass('jaf');
    changeBackground(airname);

});*/
