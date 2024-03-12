
$(document).ready(function() {
    $('#searchInput').on('input', function() {
        var searchTerm = $(this).val().toLowerCase();
        $('#transactionList li').each(function() {
            var text = $(this).text().toLowerCase();
            if (text.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});
 
// funcion para ocultar el div contenedor
$(document).ready(function(){
    
    $("#botonOcultar").click(function(){
        
        $("#contenedor").hide();
    });
});