$('document').ready(function() {

  $('body').on('click', 'button', function() {
    $.get('/balance', function( data ) {
      $( ".result" ).html( data ).animate({
    opacity: 1.3,
    marginLeft: "0.6in",
    fontSize: "10em",
    borderWidth: "10px"
  }, 1500 );

  });

});

});
