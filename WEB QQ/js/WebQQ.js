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

/******好友框*******/
   $(".L1").attr("BB","1");
   $(".L1").click(function(){
		var c=$(this).attr("bto");
		if ($(this).attr("BB")==1) {
			$(".F"+c).slideDown();
			$(this).attr("BB","0");
		}
		else{
			$(".F"+c).slideUp();
			$(this).attr("BB","1");
		};		
	});
	// $(".L1").click(function(){
	// 	var c=$(this).attr("bto");
	// 	var d=$(this).attr("BB");
	// 	if (d==1) {
	// 		$(".F"+c).slideDown();
	// 		$(".L1").attr("BB",0);
	// 	}
	// 	else{
	// 		$(".F"+c).slideUp();
	// 		$(".L1").attr("BB",1);
	// 	};		
	// });
	$(document).on("click",".Button1",function(){
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


	/******关闭窗口******/
	$(document).on("click",".close",function(){
		var closeId=$(this).attr("parentid");
		$(".friend").find(".friendnick").attr("kai","1");
		$("#"+closeId).remove();
	});


	/****关于QQ****/
	$(".guanyu").click(function(){
		var f=$(this).attr("bt");
		if (f==1) {
			$(".group1").show();
			$(this).attr("bt",0);
			$(".youl").css("background-image",'url("images/open_arrow_fire.png")');
		}else
		{
			$(".group1").hide();
			$(this).attr("bt",1);
			$(".youl").css("background-image",'url("images/open_arrow.png")');
		};
	});


	/******弹出聊天窗口*******/

	$(".friend").click(function(){

		var html="";
		var name=$(this).find(".friendnick").attr("name");
		var z=$(this).find(".friendnick").attr("kai");
		var y=$(this).attr("friendid");
				html +=			'<div class="panel chat-panel " id="frm'+y+'" >'
				html +=				'<div class="hear1">'
				html +=					'<div class="Button1" Button-s="1">'
				html +=						'<span class="sanjiao"></span>'
				html +=					'</div>'
				html +=					'<div class="people">'+name+'</div>'
				html +=					'<div class="close" parentid="frm'+y+'">'
				html +=						'关闭'
				html +=					'</div>'
				html +=					'<div class="min">'
				html +=						'最小化'
				html +=					'</div>'
				html +=				'</div>'
				html +=				'<ul class="In1-a">'
				html +=					'<li class="In1">'
				html +=						'<div id="In1-1"></div>'
				html +=						'<a>QQ空间</a>'
				html +=					'</li>'
				html +=					'<li class="In1">'
				html +=						'<div id="In1-2"></div>'
				html +=						'<a>详细资料</a>'
				html +=					'</li>'
				html +=					'<li class="In1">'
				html +=						'<div id="In1-3"></div>'
				html +=						'<a>聊天记录</a>'
				html +=					'</li>'
				html +=				'</ul>'
				html +=				'<ul class="In1-b" >'
				html +=					'<li class="In1">'
				html +=						'<div id="In1-4"></div>'
				html +=						'<a>群成员</a>'
				html +=					'</li>'
				html +=					'<li class="In1">'
				html +=						'<div id="In1-2"></div>'
				html +=						'<a>群资料</a>'
				html +=					'</li>'
				html +=					'<li class="In1">'
				html +=						'<div id="In1-3"></div>'
				html +=						'<a>聊天记录</a>'
				html +=					'</li>'
				html +=				'</ul>'
				html+=				'<ul class="In1-c" >'
				html+=					'<li class="In1">'
				html+=						'<div id="In1-4"></div>'
				html+=						'<a>讨论组成员</a>'
				html+=					'</li>'
				html+=					'<li class="In1">'
				html+=						'<div id="In1-2"></div>'
				html+=						'<a>讨论组资料</a>'
				html+=					'</li>'
				html+=					'<li class="In1">'
				html+=						'<div id="In1-3"></div>'
				html+=						'<a>聊天记录</a>'
				html+=					'</li>'
				html+=				'</ul>'
				html+=				'<div class="chatContent">'
				html+=					'<ul class="fff"></ul>'
				html+=				'</div>'
				html+=				'<div class="footer1">'
				html+=					'<div class="smile"></div>'
				html+=					'<input type="text" class="chatting">'									
				html+=					'<div class="send">发送</div>'
				html+=				'</div>'
				html+=			'</div>'	
	
		if (z==1) {
				$(".wrap").append(html);
				$(this).find(".friendnick").attr("kai","0");
				
		};
		$(".panel").draggable();
	});	

/***聊天****/
	$(document).on("click",".send",function(){
		var html1="";
		var x=$(this).parent().find(".chatting").val();

			html1+=				'<li>'
			html1+=					'<div class="senduserimg"></div>'
			html1+=					'<a class="wenzi">'+x+'</a>'
			html1+=				'</li>'
	
			$(".fff").append(html1);
			$(this).parent().find(".chatting").val("");
	});


	/******换背景*****/
	var o=19;
	$(".pre").click(function(){
		// var o=$("body").attr("bp");
		o--;
		$("body").css("background-image",'url("images/'+o+'.jpg")');
		// alert(o);
		if (o<1) {
			o=19;

		};
	});

	$(".next").click(function(){
		
		o++;
		$("body").css("background-image",'url("images/'+o+'.jpg")');
		// alert(o);
		if (o>19) {
			o=1;

		};
	});
});
















