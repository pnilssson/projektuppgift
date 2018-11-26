$( function() { $( ".accordion" ).accordion({
    collapsible: true,
    heightStyle: "content"
}); });

// $( "#almannaFragor" ).on( "click", function() {
//     $("almannaFragor").show(),
//     $("yhAccordion").hide(),
//     $("skolanAccordion").hide(),
//     $("csnAccordion").hide(),
//     $("csnAccordion").hide()
// });
// $( "#yh" ).on( "click", function() {
//     $("almannaFragor").hide,
//         $("yhAccordion").show(),
//         $("skolanAccordion").hide(),
//         $("csnAccordion").hide(),
//         $("csnAccordion").hide()
// });

$( "#almannaFragor" ).click(function () {
    alert("hide")
    // $("almannaFragorAccordion").hide(),
    // $("yhAccordion").show(),
    // $("skolanAccordion").hide(),
    // $("csnAccordion").hide(),
    // $("csnAccordion").hide()
})
$( "#yh" ).click(function () {
    alert("show")
    // $("almannaFragorAccordion").show(),
    // $("yhAccordion").show(),
    // $("skolanAccordion").hide(),
    // $("csnAccordion").hide(),
    // $("csnAccordion").hide()
})