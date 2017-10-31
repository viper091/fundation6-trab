/**
 * Created by VitorEmanuel on 24/10/2017.
 */
$body = $("body");
var aaa;


function showResults(response) {

    $('#resultado tbody').find('tr,p').remove();
    $('#resultado').show();
    $('#nada_encontrado').hide();

    if(response.length == 0){

        $('#resultado').hide();
        $('#nada_encontrado').show();
        return false;
    }
    $('#resultados').html(response.length);
    for(var i =0; i<response.length; i++){


        var aero = response[i];
        var nname = aero.nome.replace(/ /g,'')


        var wikiURL = "https://en.wikipedia.org/w/api.php";
        wikiURL += '?' + $.param({
                'action' : 'opensearch',
                'search' : aero.nome,
                'prop'  : 'text',
                'rvprop' : 'content',
                'format' : 'json',
                'limit' : 1
            });

        $.ajax( {
            url: wikiURL,
            dataType: 'jsonp',
            async: true,
            success: function(data) {
                //  $('#'+nname).html(data[2]);
                var wikiinfo = "<tr>" +

                    "<td >" + data[2] + "</td>" +
                    "<td></td>"
                    +
                    "<td></td>" +
                    "<td></td>" +
                    "</tr>";



               // $('#' + nname).before(). append('aa');

                aaa = data;


            }
        } );

        var img="";
        if(aero.img.length == 0) {
            img = "<img height='140' width='190' src='./imgs/airplanes/not_found.jpg'></img>";
        }
        else img =  "<img height='140' width='190' src='./imgs/airplanes/"+aero.img+"'></img>";
        $('#resultado tbody').append(" <tr id='"+ nname + "'>" +
            "<td>"+img+"</td>" +
            "<td>"+aero.nome+"</td>" +
            "<td>"+aero.origem+"</td>" +
            "<td>"+aero.tipo+"</td>" +
            "</tr>"

        );




    }
}



$(document).ready(function() {

    $('#buscar').click(function () {



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


$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }
});
