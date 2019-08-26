// validate contact information
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "") {        
        alert("please fill in your name");               
        return false;
    }
    else if  (email == "") {
        alert("Please fill in your name and email");        
        return false;
    }

    else  {
        alert(name + ", we have received your message. Thank you for reaching out to us.");
    }
        
}


$(document).ready(function(){
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

    $("#work1")
   .mouseenter(function () {
       $("#text1").show("slow");
   })
   .mouseleave(function () {
       $("#text2").hide("slow");
   });


})






