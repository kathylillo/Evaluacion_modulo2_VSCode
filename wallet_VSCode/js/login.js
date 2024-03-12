$(document).ready(function() {
 $('#loginform').submit(function(event) {
      event.preventDefault();
      var email = $('#email').val();
      var password = $('#password').val();
  
      
      if (email.trim() === 'admin@gmail.com' && password.trim() === '12345') {
        // Credenciales válidas, redirigir a la pantalla de menu
        setTimeout(function(){
          window.location.href ='./../html/menu.html';
      }, 5000); // 5 segundos
        alert ('Nuevo inicio de sesión aceptado: \Email: '+email)
        $("#msj-correcto").show();
        $('#email').val('');
      
      } else{
      $("#msj-incorrecto").show();
      alert ('Credenciales invalidas, vualva a intentarlo.')
      }
}); 
}); 
$(document).ready(function(){
  // Muestra el contenedor del audio
  $('#audio-container').show();
});