// $document.ready(function(){
$("#design").click(function () {
    $("#design_text").toggle(1000);
    $("this").animate({
        height: '+=250px',
        width: '+=250px'
    });
});

$("#development").click(function () {
    $("#development_text").toggle(1000);
});
$("#product").click(function () {
    $("#product_text").toggle(1000);
});



// })