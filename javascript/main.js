$(document).ready( function(){
    $("#frmcheck").submit(function(){
        var formulario = $("#frmcheck").serializeArray();
        $.ajax({
            type: "POST",
            dataType: "json",
            url: "mailchimp/mail.php",
            data: formulario
        }).done(function(respuesta){
            $("#formulario").html(respuesta.mensaje).fadeIn();
        });
        return false;
    });
    // Cuenta regresiva
    var $countdown = $('.countdown');
    $countdown.scountdown({
        // timestampgenerator.com
        timestamp: parseInt(1430506800000, 10),
        callback: function (d, h, m, s) {
            $(".dias", $countdown).text(d);
            $(".horas", $countdown).text(h);
            $(".minutos", $countdown).text(m);
            $(".segundos", $countdown).text(s);
        }
    });
});
$("#suscribirse").click(function(){
    $("#frmcheck").css("display","block");
    return false;
});
$("#cerrar").click(function(){
    $("#frmcheck").css("display","none");
    return false;
});