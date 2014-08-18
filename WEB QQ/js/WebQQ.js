$(function(){
	 $(".BTN").click(function(){
	 	var a=$(this).attr("bu");
	 	$(".count").hide();
	 	$(".Content"+a).show();
		$(".BTN").removeClass("selected");
		$(this).addClass("selected");
		 
	});

	$(".BTW").click(function(){
		var b=$(this).attr("bn");
		$(".BTW").removeClass("active");
		$(this).addClass("active");
		$(".Y").hide();
		$(".nei"+b).show();
	});

	$(".L1").click(function(){
		var c=$(this).attr("bto");
		var d=$(this).attr("BB");
		if (d==1) {
			$(".F"+c).show();
			$(".L1").attr("BB",0);
		}
		else{
			$(".F"+c).hide();
			$(".L1").attr("BB",1);
		};		
	});
	$(".Button1").click(function(){
		var e=$(this).attr("Button-s");
		if (e==1) {
			$(".In1-a").slideDown();
			$(this).attr("Button-s",0);
		}
		else{
			$(".In1-a").slideUp();
			$(this).attr("Button-s",1);
		};
	});
	$(".close").click(function(){
		$("#container").hide();
	});
	$(".sanhang").click(function(){
		var f=$(this).attr("bt");
		if (f==1) {
			$(".sanhang").show();
			$(this).attr("bt",0);
		}else
		{
			$(".sanhang").hide();
			$(this).attr("bt",1);
		};
	});
});


