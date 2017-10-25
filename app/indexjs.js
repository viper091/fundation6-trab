/**
 * Created by VitorEmanuel on 24/10/2017.
 */
$body = $("body");

function showResults(response)
{

    $(response).each(function(index){
        $('table').append('<tr>'+this.name+'</tr>');
    });
}


$(document).ready(function() {


    $('#buscar').click(function () {

        var data =  "{'nome':'"+ $('#nome').val()  +"'}";
        $.ajax({
            method:'post',
            dataType:'json',
            contentType: "application/json;charset=UTF-8",
            url: 'buscar.php',
            async: true,
            data: data,
            success: function (response) {
          //      location.reload();
                console.log(response);
                showResults(response);
            }

        });

        return false;
    });

});


$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
    ajaxStop: function() { $body.removeClass("loading"); }
});
