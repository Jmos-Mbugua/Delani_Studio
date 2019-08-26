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
       $("#text1").hide("slow");
   });

   $("#work2")
   .mouseenter(function () {
       $("#text2").show("slow");
   })
   .mouseleave(function () {
       $("#text2").hide("slow");
   });

   $("#work3")
   .mouseenter(function () {
       $("#text3").show("slow");
   })
   .mouseleave(function () {
       $("#text3").hide("slow");
   });

   $("#work4")
   .mouseenter(function () {
       $("#text4").show("slow");
   })
   .mouseleave(function () {
       $("#text4").hide("slow");
   });

   $("#work5")
   .mouseenter(function () {
       $("#text5").show("slow");
   })
   .mouseleave(function () {
       $("#text5").hide("slow");
   });

   $("#work6")
   .mouseenter(function () {
       $("#text6").show("slow");
   })
   .mouseleave(function () {
       $("#text6").hide("slow");
   });

   $("#work7")
   .mouseenter(function () {
       $("#text7").show("slow");
   })
   .mouseleave(function () {
       $("#text7").hide("slow");
   });

   $("#work8")
   .mouseenter(function () {
       $("#text8").show("slow");
   })
   .mouseleave(function () {
       $("#text8").hide("slow");
   });


})






