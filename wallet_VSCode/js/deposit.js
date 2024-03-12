$(document).ready(function() {
    var saldo = 920000;
    
    $("#deposito-btn").click(function() {
      var monto = parseFloat($("#monto").val());
      if (isNaN(monto) || monto <= 0) {
        alert("Por favor ingresa un monto válido.");
        return;
      }
      alert("Reconctando");
      setTimeout(function(){
      saldo += monto;
      $("#saldo-actual").text(saldo);
      alert("¡Depósito exitoso! Saldo actualizado: " + saldo);
      $("#monto").val("");
    }, 3000); // 3 segundos
    });
    
    $("#retiro-btn").click(function() {
      var monto = parseFloat($("#monto").val());
      if (isNaN(monto) || monto <= 0) {
        alert("Por favor ingresa un monto válido.");
        return;
      }
      if (monto > saldo) {
        alert("Fondos insuficientes para realizar el retiro.");
        return;
      }
      alert("Reconctando");
      setTimeout(function(){
        saldo -= monto;
        $("#saldo-actual").text(saldo);
        alert("¡Retiro exitoso! Saldo actualizado: " + saldo);
        $("#monto").val("");
    }, 3000); // 3 segundos


    });
  });
