$(function(){
	showTime();

	var Time1=setInterval("showFlashimage()",5000);

	$(".Button").click(function(){
		var	a=$("#TitleList").find(".Button").attr("bu1");
		if(a==1){
			$("#TitleList").css("right","0px");
			$("#TitleList").find(".Button").attr("bu1","0");
		}else
		{
			$("#TitleList").css("right","-200px");
			$("#TitleList").find(".Button").attr("bu1","1");
		}
	});
/*****图片****/	
	$(".che-itm-1").mouseover(function(){
		$(".tu1").animate({"opacity":"1"},100);
		$(".ch-info p").animate({"opacity":"1"},100);
	});
	$(".che-itm-1").mouseleave(function(){
		$(".tu1").animate({"opacity":"0"},100);
		$(".ch-info p").animate({"opacity":"0"},100);
	});
	$(".che-itm-2").mouseover(function(){
		$(".tu2").animate({"opacity":"1"},100);
	});
	$(".che-itm-2").mouseleave(function(){
		$(".tu2").animate({"opacity":"0"},100);
		$(".ch-info p").animate({"opacity":"0"},100);
	});
	$(".che-itm-3").mouseover(function(){
		$(".tu3").animate({"opacity":"1"},100);
		$(".ch-info p").animate({"opacity":"1"},100);
	});
	$(".che-itm-3").mouseleave(function(){
		$(".tu3").animate({"opacity":"0"},100);
		$(".ch-info p").animate({"opacity":"0"},100);
	});

	$(".P1").mouseover(function(){
		$(".P2").animate({"opacity":"0"},100);
	});
	$(".P1").mouseleave(function(){
		$(".P2").animate({"opacity":"0.7"},100);
	});
	$(".P3").mouseover(function(){
		$(".P4").animate({"opacity":"0"},100);
	});
	$(".P3").mouseleave(function(){
		$(".P4").animate({"opacity":"0.7"},100);
	});


	$(".btn").click(function(){
		index=$(this).attr("picindex");
		showImage();
	});

	$(".photo").click(function(){
		var z=$(this).attr("bk");	
		$(this).css("z-index","71");		
		if (z==1) 
		{
			$("#photo1").animate({"top":"200","left":"480"},2000);
			$("#photo1").css("transform","rotate(360deg)");
			$("#photo2").animate({"top":"200","left":"480"},2000);
			$("#photo2").css("transform","rotate(360deg)");
			$("#photo3").animate({"top":"200","left":"480"},2000);
			$("#photo3").css("transform","rotate(360deg)");
			$("#photo4").animate({"top":"200","left":"480"},2000);
			$("#photo4").css("transform","rotate(360deg)");
			$("#photo5").animate({"top":"200","left":"480"},2000);
			$("#photo5").css("transform","rotate(360deg)");
			$("#photo6").animate({"top":"200","left":"480"},2000);
			$("#photo6").css("transform","rotate(360deg)");
			$("#photo7").animate({"top":"200","left":"480"},2000);
			$("#photo7").css("transform","rotate(360deg)");
			$("#photo8").animate({"top":"200","left":"480"},2000);
			$("#photo8").css("transform","rotate(360deg)");
			$(".photo").attr("bk","0");
		}
		else
		{
			$("#photo1").animate({"top":"100","left":"800"},2000);
			$("#photo1").css("transform","rotate(30deg)");
			$("#photo2").animate({"top":"200","left":"200"},2000);
			$("#photo2").css("transform","rotate(-15deg)");
			$("#photo3").animate({"top":"300","left":"90"},2000);
			$("#photo3").css("transform","rotate(15deg)");
			$("#photo4").animate({"top":"-50","left":"300"},2000);
			$("#photo4").css("transform","rotate(50deg)");
			$("#photo5").animate({"top":"50","left":"980"},2000);
			$("#photo5").css("transform","rotate(10deg)");
			$("#photo6").animate({"top":"300","left":"700"},2000);
			$("#photo6").css("transform","rotate(25deg)");
			$("#photo7").animate({"top":"150","left":"450"},2000);
			$("#photo7").css("transform","rotate(-20deg)");
			$("#photo8").animate({"top":"200","left":"1200"},2000);
			$("#photo8").css("transform","rotate(450deg)");
			$(".photo").attr("bk","1");
			$(this).animate({"z-index":""},500);
		};

	});
	

	
});

//倒计时
function showTime(){
	var curTime=new Date();
	var year=curTime.getYear();
	var month=curTime.getMonth();
	var day=curTime.getDate();
	var hour=curTime.getHours();
	var minute=curTime.getMinutes();
	var second=curTime.getSeconds();
	if(year<900)
	{
		year=year+1900;
	}
	year=2014-year;
	month=month+1;
	month=12-month;
	day=30-day;
	hour=12-hour;
	minute=10-minute;
	second=30-second;

	year=year*365*24*60*60;
	month=month*30*24*60*60;
	day=day*24*60*60;
	hour=hour*60*60;
	minute=minute*60;
	time=year+month+day+hour+minute+second;
	time=time-1;
	var second=Math.floor(time%60);
	var minute=Math.floor((time/60)%60);
	var hour=Math.floor((time/3600)%60);
	var day=Math.floor((time/(3600*24))%7);
	var week=Math.floor(time/(3600*24*7));
	
	w1=Math.floor(week/10);
	w2=Math.floor(week%10);
	d1=Math.floor(day/10);
	d2=Math.floor(day%10);
	h1=Math.floor(hour/10);
	h2=Math.floor(hour%10);
	m1=Math.floor(minute/10);
	m2=Math.floor(minute%10);
	s1=Math.floor(second/10);
	s2=Math.floor(second%10);

	$("#w1").html(w1);
	$("#w2").html(w2);
	$("#d1").html(d1);
	$("#d2").html(d2);
	$("#h1").html(h1);
	$("#h2").html(h2);
	$("#m1").html(m1);
	$("#m2").html(m2);
	$("#s1").html(s1);
	$("#s2").html(s2);
	setTimeout('showTime('+time+')',1000);
}

//Title图片切换
var currindex=2;
function showFlashimage(){
	$("#Title").css("background-image",'url("images/'+ currindex +'.jpg")');
	// $(".Button").removeClass("CurrentButton");
	// $("#Control"+ currindex).addClass("CurrentButton");
	currindex++
	if (currindex==4) {
		currindex=1;
	};





};

































