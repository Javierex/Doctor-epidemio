$('#telefono').click(function mostrarModal (){
	$('#modalTelefono').modal()
})

$('#correo').click(function mostrarModal (){
	$('#modalCorreo').modal()
})

$('#arriba').click(function(e){
	jQuery('html, body').animate({ scrollTop: 0 }, { duration: 300, easing: "swing" });
	e.preventDefault();
});

$("inicio").hover(function () {
    $(this).addClass('fa-cogs');
  });
