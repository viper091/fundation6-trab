/**
 * Created by VitorEmanuel on 03/11/2017.
 */


$(document).ready(function() {

    $.ajax({
        url: '',
        type: 'GET',
        jsonpCallback: 'callback',
        dataType: 'jsonp',
        success: function (res) {
            console.log(res);


        }
    });

});