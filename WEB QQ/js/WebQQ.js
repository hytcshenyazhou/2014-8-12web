$(function(){
	 $(".BTN").click(function(){
	 	var a=$(this).attr("bu");
	 	$(".count").hide();
	 	$(".Content"+a).show();
		$(".BTN").removeClass("selected");
		$(this).addClass("selected");
		 
	});

	$(function() {
	$( "#List" ).sortable();
	$( "#List" ).disableSelection();
	});
	$(".BTW").click(function(){
		$(".BTW").removeClass("active");
		$(this).addClass("active");
	});
});


