$( function() {
    $( "#accordion" ).accordion();
} );

$(".imageBig, #courseTextIt").hover(function(){
    $('#courseTextIt').show();
},function(){
    $('#courseTextIt').hide();
});