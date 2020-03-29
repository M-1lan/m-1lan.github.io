$(".authforminput").focus(function focused() {
	$(this).prev().addClass("labelmini");
});
$(".authforminput").focusout(function blured() {
	if ( !$(this).val() ) { 
		$(this).prev().removeClass("labelmini");
	}
});
$('.window').draggable({
	containment : '#mainview',
	cursor : 'grabbing',
	handle: "#grabspace"
});