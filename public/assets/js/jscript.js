$(function(){
    
     $(".loader").fadeOut("fast", function() {
        $("#content").fadeIn("fast");
    });

     $(document).on('click', '.xLink', function() {
        let obj = $(this);
        let ctrl = obj.data('ctrl');
        let accion = obj.data('accion');

        $.ajax({
            url:'?ctrl='+ctrl+'&accion='+accion,
            type:'POST',
            contentType: false,
            processData: false,
            beforeSend: function() {
                $('.loader').show();
                $(home).hide();
            }
        }).done(function(datos){
            $('.loader').hide();

            $('#home').html(datos);
            $(".loader").fadeOut("fast", function() {
                // Muestra el contenido
                $(home).fadeIn("fast");
            });
        }).fail(function(){
            alert("error: link->controlador");
        }).always(function() {
            $('.loader').hide();
        }); 
     });

      $("#frmLogin").on("submit", function(event) {
        event.preventDefault();
        let obj = $(this);
        let ctrl = obj.data('ctrl');
        let accion = obj.data('accion');
        let formulario = "#" + obj.data('formulario');
        let home = "#"+obj.data('home');
        var dataForm = new FormData($(formulario)[0]);

        $.ajax({
            url:'?ctrl='+ctrl+'&accion='+accion,
            type:'POST',
            data: dataForm,
            contentType: false,
            processData: false,
            beforeSend: function() {
                $('.loader').show();
                $('.spinner-border').removeClass("cargar");
                $(home).hide();
                $("#menu").hide();
            }
        }).done(function(datos){
            $('.loader').hide();
            $('.spinner-border').addClass("cargar");
            const obj= JSON.parse(datos)
            $('#menu').html(obj.menu);
            $(home).html(obj.contenido);
            /* $(home).html(obj.contenido); */
            $(".loader").fadeOut("fast", function() {
                // Muestra el contenido
                $(home).fadeIn("fast");
                $('#menu').fadeIn("fast");
            });
            
        }).fail(function(){
            alert("error: Form->submit");
        }).always(function() {
            /* $(this).attr('disabled', true); */
            $('.loader').hide();
            $('.spinner-border').addClass("cargar");
        }); 
     });
});