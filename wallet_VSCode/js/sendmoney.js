$(document).ready(function(){
    // Evento para enviar dinero
    $("#formEnviarDinero").submit(function(e){
      e.preventDefault();
      var saldo = parseInt($("#saldo").text());
      var monto = parseInt($("#monto").val());
      if (monto > saldo) {
        alert("Saldo insuficiente.");
        return;
      }
      alert("Reconctando");
      setTimeout(function(){
      $("#saldo").text(saldo - monto);
      alert("Transferencia exitosa. Nuevo saldo: " + (saldo - monto));
      $("#monto").val('');
    }, 3000); // 3 segundos
    });
  
    // Evento para agregar contacto
    $("#formAgregarContacto").submit(function(e){
      e.preventDefault();
      var nombre = $("#nombre").val();
      var rut = $("#rut").val();
      var alias = $("#alias").val();
      var banco = $("#banco").val();
      var option = $('<option>', {
        value: nombre,
        text: nombre + ' - ' + alias + ' - ' + banco
      });
      $("#destinatario").append(option);
      alert("Contacto agregado correctamente.");
      $("#nombre").val('');
      $("#rut").val('');
      $("#alias").val('');
      $("#banco").val('');
    });
  });