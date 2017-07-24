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

$("#todos").click(function() {
	$(".contenido1").removeClass('none');
	$(".row1").removeClass('none');
	$(".contenido2").removeClass('none');
	$(".row2").removeClass('none');
	$(".contenido3").removeClass('none');
	$(".rowotro").removeClass('none');
	$("#espacio2").removeClass('espacio')
	$("#espacio1").addClass('espacio')
	$("#padding").removeClass('padding-inferior');
	$(".rowotro").addClass('padding-inferior');
	$("#submenu").addClass('margen');
});

$("#anteproyecto").click(function() {
	$(".contenido1").removeClass('none');
	$(".row1").removeClass('none');
	$(".contenido2").addClass('none');
	$(".row2").addClass('none');
	$(".contenido3").addClass('none');
	$(".rowotro").addClass('none');
	$("#padding").addClass('padding-inferior');
});

$("#desarrollo").click(function() {
	$(".contenido1").addClass('none');
	$(".row1").addClass('none');
	$(".contenido2").removeClass('none');
	$(".row2").removeClass('none');
	$(".contenido3").addClass('none');
	$(".rowotro").removeClass('none');
	$("#padding").removeClass('.padding-inferior');
	$(".rowotro").addClass('padding-inferior');
});

$("#otros").click(function() {
	$(".contenido1").addClass('none');
	$(".row1").addClass('none');
	$(".contenido2").addClass('none');
	$(".row2").addClass('none');
	$(".contenido3").removeClass('none');
	$(".rowotro").removeClass('none');
	$("#espacio2").addClass('espacio')
	$("#espacio1").removeClass('espacio')
	$("#padding").removeClass('.padding-inferior');
	$(".rowotro").addClass('padding-inferior');
});

