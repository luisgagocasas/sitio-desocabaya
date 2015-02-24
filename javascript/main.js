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
/*Analytics*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-56094960-2', 'desocabaya.com');
ga('require', 'displayfeatures');
ga('send', 'pageview');