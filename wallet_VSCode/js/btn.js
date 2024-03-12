// buttons con clic dirigen a otra pagina html

document.getElementById("button1").addEventListener("click", function() {
    window.location.href = "./../html/deposit.html"; 
  });
  
  document.getElementById("button2").addEventListener("click", function() {
    window.location.href = "./../html/sendmoney.html"; 
  });
  
  document.getElementById("button3").addEventListener("click", function() {
    window.location.href = "./../html/transactions.html"; 
  });
  
  
  // Detener el carrusel al pasar el mouse
  $('#carouselExampleInterval').carousel({
   pause: "hover"
 });
