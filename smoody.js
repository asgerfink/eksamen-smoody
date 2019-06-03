//FORSØG PÅ AT RYKKE bilelderne ind fra siden på app siden 
// let billede1 = document.getElementById ("pushin");

//let position1 = billede1.offsetTop;

//function flyvind(){
//    if (window.pageYOffset = position1){
//        billede1.style.animation="fravenstre 1s linear";
//    }

//}

//window.onload = function () {
//    flyvind ()
//};




// Tilbage til toppen
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}