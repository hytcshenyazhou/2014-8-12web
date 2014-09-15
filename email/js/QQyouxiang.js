$(function(){
	// $("#kuaisu").click(function(){
	// 	$("#F1").show();
	// 	$("#F2").hide();
	// 	$(".kuaisu-btn").css("color","#333");
	// 	$(".zhanghao").css("color","#999")
	// });
	// $(".zhanghao").click(function(){
	// 	$("#F1").hide();
	// 	$("#F2").show();
	// 	$(".zhanghao").css("color","#333");
	// 	$(".kuaisu-btn").css("color","#999");	
	// });
	// $(".B1").click(function(){
	// 	var a=$(this).attr("bu1");
	// 	if(a==1){
	// 		$(".B1-1-1").css("background-position","-59px -17px");
	// 		$(this).attr("bu1","0");
	// 	}else
	// 	{
	// 		$(".B1-1-1").css("background-position","-38px -17px");
	// 		$(this).attr("bu1","1");
	// 	}
 
	// });
	// $(".B4").click(function(){
	// 	var a=$(this).attr("bu1");
	// 	if(a==1){
	// 		$(".B1-1-1").css("background-position","-59px -17px");
	// 		$(this).attr("bu1","0");
	// 	}else
	// 	{
	// 		$(".B1-1-1").css("background-position","-38px -17px");
	// 		$(this).attr("bu1","1");
	// 	}
	// });
	d=Math.random()*6+1;
	b=Math.floor(d);
	$(".C"+b).show();
});
var d;
var b;
