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
	$(".contenido2").removeClass('noe');
	$(".row2").removeClass('none');
	$(".contenido3").removeClass('none');
	$(".row3").removeClass('none');
});

$("#anteproyecto").click(function() {
	$(".contenido1").removeClass('none');
	$(".row1").removeClass('none');
	$(".contenido2").addClass('noe');
	$(".row2").addClass('none');
	$(".contenido3").addClass('none');
	$(".row3").addClass('none');
});

$("#desarrollo").click(function() {
	$(".contenido1").addClass('none');
	$(".row1").addClass('none');
	$(".contenido2").removeClass('noe');
	$(".row2").removeClass('none');
	$(".contenido3").addClass('none');
	$(".row3").addClass('none');
});

$("#otros").click(function() {
	$(".contenido1").addClass('none');
	$(".row1").addClass('none');
	$(".contenido2").addClass('noe');
	$(".row2").addClass('none');
	$(".contenido3").removeClass('none');
	$(".row3").removeClass('none');
});

$("#excelMenos").click(function() {
	$(this).addClass('none');
	$(".parrafo").addClass('none');
	$("#excelMas").removeClass('none');
});

$("#accesMas").click(function() {
	$(this).addClass('none');
	$(".parrafoAcces").removeClass('none');
	$("#accesMenos").removeClass('none');
});

$("#accesMenos").click(function() {
	$(this).addClass('none');
	$(".parrafoAcces").addClass('none');
	$("#accesMas").removeClass('none');
});

$("#insertMas").click(function() {
	$(this).addClass('none');
	$(".parrafoInsert").removeClass('none');
	$("#insertMenos").removeClass('none');
});

$("#insertMenos").click(function() {
	$(this).addClass('none');
	$(".parrafoInsert").addClass('none');
	$("#insertMas").removeClass('none');
});

$("#analisisMas").click(function() {
	$(this).addClass('none');
	$(".parrafoAnalisis").removeClass('none');
	$("#analisisMenos").removeClass('none');
});

$("#analisisMenos").click(function() {
	$(this).addClass('none');
	$(".parrafoAnalisis").addClass('none');
	$("#analisisMas").removeClass('none');
});

$("#plataformaMas").click(function() {
	$(this).addClass('none');
	$(".parrafoPlataforma").removeClass('none');
	$("#plataformaMenos").removeClass('none');
});

$("#plataformaMenos").click(function() {
	$(this).addClass('none');
	$(".parrafoPlataforma").addClass('none');
	$("#plataformaMas").removeClass('none');
});