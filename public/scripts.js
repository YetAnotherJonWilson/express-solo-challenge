$('document').ready(function() {
  $('body').on('click', 'button', function() {
    $.get('http://localhost:3000/balance', function( data ) {
      $( ".result" ).html( data.balance );
    });
    // var something data.something (use postman to see this)
    // div append var





//     $.get( "ajax/test.html", function( data ) {
//   $( ".result" ).html( data );
//   alert( "Load was performed." );
// });
  });

});
