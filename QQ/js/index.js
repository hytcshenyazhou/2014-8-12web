/*搜索边框变蓝*/
$(function(){
	$("#search").hover(function(){
		$(this).css("border","2px solid rgb(50,151,216)");
	},function(){
		$(this).css("border","2px solid rgb(211, 211, 211)");
	});
});
/*搜索选项*/
$(function(){
	$("#searchSelect").hover(function(){
		$(".searchSelectUL").show();
	},function(){
		$(".searchSelectUL").hide();
	});
});

$(function(){
	$(".searchSelectUL").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
});

/*选项卡*/
$(function(){
	$("#importantNews").mouseover(function(){
		$(".titlecontentL").css({"font-weight": "bold", "background-image": 'url("css/images/vH2Select.png")', "border-top": "2px solid rgb(69, 143, 206)", "border-left": "1px solid rgb(189, 215, 242)", "border-right": "1px solid rgb(189, 215, 242)", "border-bottom": "0px"});
		$(".titlecontentR").css({"font-weight": "normal","background-image": "", "border":"0","text-decoration": "none"});
		$(".lm2left1_leftDS").show();
		$(".lm2left1_right2DH").hide();
	});
	$("#jiangSuNews").mouseover(function(){
		$(".titlecontentL").css({"font-weight": "normal","background-image": "", "border":"0","text-decoration": "none"});
		$(".titlecontentR").css({ "font-weight": "bold", "background-image": 'url("css/images/vH2Select.png")', "border-top": "2px solid rgb(69, 143, 206)", "border-left": "1px solid rgb(189, 215, 242)", "border-right": "1px solid rgb(189, 215, 242)", "border-bottom": "0px"});
		$(".lm2left1_leftDH").show();
		$(".lm2left1_leftDS").hide();
	});
	$("#todayMovie").mouseover(function(){
		$(".titlecontentLM").css({"font-weight": "bold", "background-image": 'url("css/images/vH2Select.png")', "border-top": "2px solid rgb(69, 143, 206)", "border-left": "1px solid rgb(189, 215, 242)", "border-right": "1px solid rgb(189, 215, 242)", "border-bottom": "0px"});
		$(".titlecontentRM").css({"font-weight": "normal","background-image": "", "border":"0","text-decoration": "none"});
		$(".lm2left1_right2DS").show();
		$(".lm2left1_right2DH").hide();
	});
	$("#yingshiju").mouseover(function(){
		$(".titlecontentLM").css({"font-weight": "normal","background-image": "", "border":"0","text-decoration": "none"});
		$(".titlecontentRM").css({ "font-weight": "bold", "background-image": 'url("css/images/vH2Select.png")', "border-top": "2px solid rgb(69, 143, 206)", "border-left": "1px solid rgb(189, 215, 242)", "border-right": "1px solid rgb(189, 215, 242)", "border-bottom": "0px"});
		$(".lm2left1_right2DH").show();
		$(".lm2left1_right2DS").hide();
	});
});

//指数
$(function(){
	$("#shang").mouseover(function(){
		$(this).addClass("currentZhi");
		$("#heng").removeClass("currentZhi");
		$("#dao").removeClass("currentZhi");
		$("#lm2left2_rightContent21").show();
		$("#lm2left2_rightContent22").hide();
		$("#lm2left2_rightContent23").hide();
	});
	$("#heng").mouseover(function(){
		$(this).addClass("currentZhi");
		$("#shang").removeClass("currentZhi");
		$("#dao").removeClass("currentZhi");
		$("#lm2left2_rightContent22").show();
		$("#lm2left2_rightContent21").hide();
		$("#lm2left2_rightContent23").hide();
	});
	$("#dao").mouseover(function(){
		$(this).addClass("currentZhi");
		$("#shang").removeClass("currentZhi");
		$("#heng").removeClass("currentZhi");
		$("#lm2left2_rightContent23").show();
		$("#lm2left2_rightContent22").hide();
		$("#lm2left2_rightContent21").hide();
	});
});
//大家爱看
$(function(){
	$("#lm2R3Li11").mouseover(function(){
		$("#lm2R3C11").show();
		$("#lm2R3C12").hide();
		$("#lm2R3C13").hide();
		$("#lm2R3C14").hide();
		$("#lm2R3C15").hide();
	});
	$("#lm2R3Li12").mouseover(function(){
		$("#lm2R3C12").show();
		$("#lm2R3C11").hide();
		$("#lm2R3C13").hide();
		$("#lm2R3C14").hide();
		$("#lm2R3C15").hide();
	});
	$("#lm2R3Li13").mouseover(function(){
		$("#lm2R3C13").show();
		$("#lm2R3C12").hide();
		$("#lm2R3C11").hide();
		$("#lm2R3C14").hide();
		$("#lm2R3C15").hide();
	});
	$("#lm2R3Li14").mouseover(function(){
		$("#lm2R3C14").show();
		$("#lm2R3C12").hide();
		$("#lm2R3C13").hide();
		$("#lm2R3C11").hide();
		$("#lm2R3C15").hide();
	});
	$("#lm2R3Li15").mouseover(function(){
		$("#lm2R3C15").show();
		$("#lm2R3C12").hide();
		$("#lm2R3C13").hide();
		$("#lm2R3C14").hide();
		$("#lm2R3C11").hide();
	});
		$("#lm2R3Li16").mouseover(function(){
		$("#lm2R3C16").show();
		$("#lm2R3C17").hide();
		$("#lm2R3C18").hide();
		$("#lm2R3C19").hide();
		$("#lm2R3C110").hide();
	});
	$("#lm2R3Li17").mouseover(function(){
		$("#lm2R3C17").show();
		$("#lm2R3C16").hide();
		$("#lm2R3C18").hide();
		$("#lm2R3C19").hide();
		$("#lm2R3C110").hide();
	});
	$("#lm2R3Li18").mouseover(function(){
		$("#lm2R3C18").show();
		$("#lm2R3C16").hide();
		$("#lm2R3C17").hide();
		$("#lm2R3C19").hide();
		$("#lm2R3C110").hide();
	});
	$("#lm2R3Li19").mouseover(function(){
		$("#lm2R3C19").show();
		$("#lm2R3C16").hide();
		$("#lm2R3C17").hide();
		$("#lm2R3C18").hide();
		$("#lm2R3C110").hide();
	});
	$("#lm2R3Li110").mouseover(function(){
		$("#lm2R3C110").show();
		$("#lm2R3C16").hide();
		$("#lm2R3C17").hide();
		$("#lm2R3C18").hide();
		$("#lm2R3C19").hide();
	});
	$("#lm2R3Li111").mouseover(function(){
		$("#lm2R3C111").show();
		$("#lm2R3C112").hide();
		$("#lm2R3C113").hide();
		$("#lm2R3C114").hide();
		$("#lm2R3C115").hide();
	});
	$("#lm2R3Li112").mouseover(function(){
		$("#lm2R3C112").show();
		$("#lm2R3C111").hide();
		$("#lm2R3C113").hide();
		$("#lm2R3C114").hide();
		$("#lm2R3C115").hide();
	});
	$("#lm2R3Li113").mouseover(function(){
		$("#lm2R3C113").show();
		$("#lm2R3C112").hide();
		$("#lm2R3C111").hide();
		$("#lm2R3C114").hide();
		$("#lm2R3C115").hide();
	});
	$("#lm2R3Li114").mouseover(function(){
		$("#lm2R3C114").show();
		$("#lm2R3C112").hide();
		$("#lm2R3C113").hide();
		$("#lm2R3C111").hide();
		$("#lm2R3C115").hide();
	});
	$("#lm2R3Li115").mouseover(function(){
		$("#lm2R3C115").show();
		$("#lm2R3C112").hide();
		$("#lm2R3C113").hide();
		$("#lm2R3C114").hide();
		$("#lm2R3C111").hide();
	});
});
//更多选项
$(function(){
	$("#lm2right1A").click(function(){
		$("#lm2right1A").css("left", "-353px");
		$("#lm2right1R").show();
		$("lm2right1L").hide();
		$("#lm2right1R").hover(function(){
			$("#lm2right1R").show();
		},function(){
			$("#lm2right1A").css("left", "-14px");
			$("#lm2right1R").hide();
		});
	});
});

//淘宝

$(function(){
	$(".lm9RightContent1Ul").click(function(){
		showImage();
		currentindex=$(this).attr("sid");
	});
	$("#lm9rightContent").hover(function(){
		clearInterval(timeID);
	},function(){
		timeID=setInterval("showImage()",1000);
	});
		timeID=setInterval("showImage()",1000);
});
var timeID;
var currentindex=2;
function showImage(){
	$(".lm9TCPicAH").hide();
	$(".lm9TCPicA").hide();
	$("#lm9TCPicA"+currentindex).show();
	$(".lm9RightContent1Ul").removeClass("lm9RightContent1UlSpecial");
	$("#lm9TCLi"+currentindex).addClass("lm9RightContent1UlSpecial");
	currentindex++;
	if (currentindex==16) {
		currentindex=1;
	};

};

//培训考试

$(function(){
	$("#peiXunT").mouseover(function(){
		$("#peixun").show();
		$("#kaoshi").hide();
		$(".lm7LTitleMoRen").toggleClass("lm7LTitleL2");
	});
	$("#examT").mouseover(function(){
		$("#peixun").hide();
		$("#kaoshi").show();
		$(".lm7LTitleMoRen").toggleClass("lm7LTitleL2");
	});
});
