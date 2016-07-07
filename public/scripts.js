$('document').ready(function() {
  $('body').on('click', 'button', function() {
    $.get('/balance', function( data ) {
      $( ".result" ).html( data );
    });
    // var something data.something (use postman to see this)
    // div append var





//     $.get( "ajax/test.html", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });
  });

});
