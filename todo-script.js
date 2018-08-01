//check off 
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//delete
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//add new
$("input[type = 'text']").keypress(function(event) {
	if(event.which === 13) {
		//take todo text from input
		var todoText = $(this).val();
		//clear the text
		$(this).val("");
		//append it to the list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

//toggle button
$(".fa-angle-up").click(function() {
	$("input[type = 'text']").fadeToggle();
});