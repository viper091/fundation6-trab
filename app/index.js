/**
 * Created by VitorEmanuel on 24/10/2017.
 */
$body = $("body");
var aaa;
function clean(filename) {
    filename= filename.split(/[^a-zA-Z0-9\-\_\.]/gi).join('_');
    return filename;
};
function wikipediadata(id,nome){

    var wikiURL = "https://pt.wikipedia.org/w/api.php";
    wikiURL += '?' + $.param({
            'action' : 'opensearch',
            'search' : nome,
            'prop'  : 'revisions',
            'rvprop' : 'content',
            'rvsection' : '1',
            'rvlimit' : '1',
            'format' : 'json',
            'limit' : 1
        });
     wikiURL = "https://en.wikipedia.org/w/api.php";
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
            for( var page in data.query.pages)
            $('#'+id).html(data.query.pages[page].extract);
            //alert(id);
        //    alert(data.query.pages[page].extract);
         ///   aaa = data;

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
        //var nname = aero.nome.replace(/ /g,'')
        var nname = clean(aero.nome);

        var img="";
        if(aero.img.length == 0) {

            img = "<img id='"+nname+'s'+"' height='140' width='190' src='./imgs/airplanes/not_found.jpg'></img>";

        }
        else img =  "<img height='140' width='190' src='./imgs/airplanes/"+aero.img+"'></img>";
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

        wikipediadata(nname,aero.nome);

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
    ajaxStop: function() {

        $('[data-open-details]').click(function (e) {
            e.preventDefault();
            $(this).next().toggleClass('is-active');
            $(this).toggleClass('is-active');
        });
        $body.removeClass("loading"); }



});
