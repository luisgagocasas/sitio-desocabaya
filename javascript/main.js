$(document).ready( function(){
  // Cuenta regresiva
  var $countdown = $('.countdown');
  $countdown.scountdown({
    // timestampgenerator.com
      timestamp: parseInt(1427569200000, 10),
      callback: function (d, h, m, s) {
          $(".dias", $countdown).text(d);
          $(".horas", $countdown).text(h);
          $(".minutos", $countdown).text(m);
          $(".segundos", $countdown).text(s);
    }
  });
});