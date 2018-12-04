// Gör så att höjden på varje ruta anpassas efter mängden text och så att man kan kollapsa alla "titlar (h4)"
$( function() { $( ".accordion" ).accordion({
    collapsible: true,
    heightStyle: "content"
}); });

// Visa enbart "Allmänna frågor"
$( function() {
    $( "#almannaFragor" ).on( "click", function() {
        $( "#almannaFragorAccordion" ).removeClass( "hiddenAccordion" );
        $( "#yhAccordion" ).addClass( "hiddenAccordion" );
        $( "#skolanAccordion" ).addClass( "hiddenAccordion" );
        $( "#csnAccordion" ).addClass( "hiddenAccordion" );
        $( "#hurDuAnsokerAccordion" ).addClass( "hiddenAccordion" );
    });
} );

// Visa enbart "YH"
$( function() {
    $( "#yh" ).on( "click", function() {
        $( "#almannaFragorAccordion" ).addClass( "hiddenAccordion" );
        $( "#yhAccordion" ).removeClass( "hiddenAccordion" );
        $( "#skolanAccordion" ).addClass( "hiddenAccordion" );
        $( "#csnAccordion" ).addClass( "hiddenAccordion" );
        $( "#hurDuAnsokerAccordion" ).addClass( "hiddenAccordion" );
    });
} );

// Visa enbart "Skolan"
$( function() {
    $( "#skolan" ).on( "click", function() {
        $( "#almannaFragorAccordion" ).addClass( "hiddenAccordion" );
        $( "#yhAccordion" ).addClass( "hiddenAccordion" );
        $( "#skolanAccordion" ).removeClass( "hiddenAccordion" );
        $( "#csnAccordion" ).addClass( "hiddenAccordion" );
        $( "#hurDuAnsokerAccordion" ).addClass( "hiddenAccordion" );
    });
} );

// Visa enbart "CSN"
$( function() {
    $( "#csn" ).on( "click", function() {
        $( "#almannaFragorAccordion" ).addClass( "hiddenAccordion" );
        $( "#yhAccordion" ).addClass( "hiddenAccordion" );
        $( "#skolanAccordion" ).addClass( "hiddenAccordion" );
        $( "#csnAccordion" ).removeClass( "hiddenAccordion" );
        $( "#hurDuAnsokerAccordion" ).addClass( "hiddenAccordion" );
    });
} );

// Visa enbart "Hur du ansöker"
$( function() {
    $( "#hurDuAnsoker" ).on( "click", function() {
        $( "#almannaFragorAccordion" ).addClass( "hiddenAccordion" );
        $( "#yhAccordion" ).addClass( "hiddenAccordion" );
        $( "#skolanAccordion" ).addClass( "hiddenAccordion" );
        $( "#csnAccordion" ).addClass( "hiddenAccordion" );
        $( "#hurDuAnsokerAccordion" ).removeClass( "hiddenAccordion" );
    });
} );