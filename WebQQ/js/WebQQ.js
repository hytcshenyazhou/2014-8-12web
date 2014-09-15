$(function(){
	/*$(".contact").click(function(){
		$(".ContactsU1").show();
		$(".ContactsU2").hide();
		$(".ContactsU3").hide();
		$(".ContactsU4").hide();
	});
	$(".conversation").click(function(){
		$(".ContactsU2").show();
		$(".ContactsU1").hide();
		$(".ContactsU3").hide();
		$(".ContactsU4").hide();
	});
	$(".plugin").click(function(){
		$(".ContactsU3").show();
		$(".ContactsU2").hide();
		$(".ContactsU1").hide();
		$(".ContactsU4").hide();
	});
	$(".setup").click(function(){
		$(".ContactsU4").show();
		$(".ContactsU2").hide();
		$(".ContactsU3").hide();
		$(".ContactsU1").hide();
	});*/
	$(".selected").click(function(){
		var shuzi=$(this).attr("dian");
		$(".ContactsU").hide();
		$(".ContactsU"+shuzi).show();
		
		$(".selected").find("div").removeClass("newpic");
		$(".selected").removeClass("ContactsDLi");
		$(this).find("div").addClass("newpic");
		$(this).addClass("ContactsDLi");
	});
});

//好友群讨论组选择
$(function(){
	$(".tabheadLi").click(function(){
		var aa=$(this).attr("xuhao");
		$(".liebiao").hide();
		$(".liebiao"+aa).show();
		
		$(".tabheadLi").removeClass("active");
		$(this).addClass("active");
	});
});
/*换背景图*/
$(function(){
	$(".btnBGpre").click(function(){
		showImage1();
	});
	$(".btnBGnext").click(function(){
		showImage2();
	});
});
var currentindex=1;
function showImage1(){
	
	currentindex--;
	if (currentindex==0) {
		currentindex=9;
	};
	$(".bgImages").css("background-image",'url("images/'+ currentindex +'.jpg")');
};
function showImage2(){
	
	currentindex++;
	if (currentindex==10) {
		currentindex=1;
	};
	$(".bgImages").css("background-image",'url("images/'+ currentindex +'.jpg")');
};


/*好友列表*/
$(function(){
	$(".friendLie").click(function(){
		var zhan=$(this).attr("zhangkai");
		if (zhan==1) {
			$(this).next(".friends").slideDown();
			$(this).children(".liebiaoImg").hide();
			$(this).children(".liebiaoImgD").show();
			$(this).attr("zhangkai","0");
		}else{
			$(this).next(".friends").slideUp();
			$(this).attr("zhangkai","1");
			$(this).children(".liebiaoImg").show();
			$(this).children(".liebiaoImgD").hide();
		}
	});
});


//关于QQ
$(function(){
	$(".setUp3").click(function(){
		var zhi=$(this).attr("fuzhi");
		if (zhi==1) {
			$(this).next(".setUpYin").show();
			$(this).attr("fuzhi","0");
			$(this).children(".liebiaoImg").hide();
			$(this).children(".liebiaoImgD").show();
		}else{
			$(this).next(".setUpYin").hide();
			$(this).attr("fuzhi","1");
			$(this).children(".liebiaoImg").show();
			$(this).children(".liebiaoImgD").hide();
		}
	});
});
/**/
$(function(){
	$(document).on("click",".chatFormU1",function(){
		var yin=$(this).attr("yincang");
		if (yin==1) {
			$(this).parent().next(".chatFormYin").slideDown();
			$(this).attr("yincang","0");
		}else{
			$(this).parent().next(".chatFormYin").slideUp();
			$(this).attr("yincang","1");
		}
	});
});


/*聊天窗口*//*关闭*/
$(function(){
	//好友
	$(".friend").click(function(){
		var friendid=$(this).attr("friendid");
		var html="";
		var name=$(this).attr("name");
		var num=$(this).attr("num");
		var imageId=$(this).children().attr("imageId")
		var chatDivID = "chatForm" + friendid;



		if ($(this).attr("isOpen") == "true") {
			//将已经打开的窗口置顶
			$(".chatForm").css("z-index","15");
			$("#" + chatDivID).css("z-index","16");
			$("#"+chatDivID).fadeIn();
			$("#min"+chatDivID).remove();
			$("#"+chatDivID).children().children(".chatFormUHide").attr("close","1");
			return;
		}
		$(this).attr("isOpen","true");

		html+='  <div class="chatForm" id="' + chatDivID + '">                                                                        '
		html+='     <div class="chatFormU">                                                                    '
		html+='    		<div class="chatFormU1" yincang="1"><img src="images/pannel-arrow-down.png"></div>     '
		html+='    		<div class="chanFormUName" content="'+ name +'">'+ name +'</div>                                          '
		html+='    		<div class="chatFormUHide" close="1"><span>最小化</span></div>                                   '
		html+='    		<div class="chatFormUClose" parentId="frd'+friendid+'" chatDivID="' + chatDivID + '"><span>关闭</span></div>              '
		html+='    </div>                                                                                      '
		html+='    <div class="chatFormYin">                                                                   '
		html+='    		<li class="">                                                                          '
    	html+='    			<div class="menu_list_icon viewQzone"></div>                                       '
    	html+='    			QQ空间                                                                             '
		html+='    		</li>                                                                                  '
		html+='    		<li class="">                                                                          '
		html+='    		    <div class="menu_list_icon viewInfo"></div>                                        '
		html+='    		    详细资料                                                                           '
		html+='    		</li>                                                                                  '
		html+='    		<li class="">                                                                          '
		html+='    		    <div class="menu_list_icon viewRecord"></div>                                      '
		html+='    		    聊天记录                                                                           '
		html+='    		</li>                                                                                  '
		html+='    </div>                                                                                      '
		html+='    <div class="chatFormC"></div>                                                               '
		html+='    <div class="chatFormD">                                                                     '
		html+='         <div class="biaoqing"><span class="Btnimages"></span></div>                            '
		html+='         <input class="messages">															   '
		html+='         <div class="send"><span>发送</span></div>                                              '
		html+='    </div>                                                                                      '
		html+=' </div>                                                                                         '
	
			

		$(".mainRight").append(html);
		$(".chatForm").css("z-index","15");


		$(".chatForm").click(function(){
			$(".chatForm").css("z-index","15");
			$(this).css("z-index","16");
		});
		$(".chatFormUClose").click(function(){
			var curCloseDivID = $(this).attr("chatDivID");
			$(this).parent().parent("#" + curCloseDivID).remove();
			$("#min"+curCloseDivID).remove();


			var parentId = $(this).attr("parentId");
			$("." + parentId).attr("isOpen","false");

			
		});

		//var xiaoxi=$("#"+chatDivID).children(".chatFormC").attr();


		var html1="";

		html1+='	<div class="friend frd'+friendid+'" name='+ name +' num='+num+' friendid='+friendid+'>       '
		html1+='		<div class="friendImg"><img src="images/'+imageId+'.jpg"></div>                          '
		html1+='		<div class="friendName"><span>'+ name +'</span></div>                                    '
		//html1+='		<div class="friendSay"><span>'+ xiaoxi +'</span></div>                                   '
		html1+='	</div>                                                                                       '
		

		if (num==1) {
			$(".huihua").append(html1);
			$(this).attr("num","0");
		}

		$(document).on("click",".friend",function(){
			var friendid=$(this).attr("friendid");
			$("#chatForm"+friendid).show();
			$("#chatForm"+friendid).children().children(".chatFormUHide").attr("close","1");
			$("#minchatForm"+friendid).remove();
			$(".chatForm").css("z-index","15");
			$("#chatForm"+friendid).css("z-index","16");
		});

	});
	//群
	$(".qun").click(function(){
		var qunid=$(this).attr("qunid");
		var html="";
		var qname=$(this).attr("qname");
		var num=$(this).attr("num");
		var imageId=$(this).children().attr("imageId")
		var chatDivID = "chatFormQ" + qunid;


		if ($(this).attr("isOpen") == "true") {
			//将已经打开的窗口置顶
			$(".chatForm").css("z-index","15");
			$("#" + chatDivID).css("z-index","16");
			$("#"+chatDivID).fadeIn();
			$("#min"+chatDivID).remove();
			$("#"+chatDivID).children().children(".chatFormUHide").attr("close","1");
			return;
		}
		$(this).attr("isOpen","true");


		html+='  <div class="chatForm" id="' + chatDivID + '">                                                                        '
		html+='     <div class="chatFormU">                                                                    '
		html+='    		<div class="chatFormU1" yincang="1"><img src="images/pannel-arrow-down.png"></div>     '
		html+='    		<div class="chanFormUName" content="'+ qname +'">'+ qname +'</div>                                          '
		html+='    		<div class="chatFormUHide" close="1"><span>最小化</span></div>                                   '
		html+='    		<div class="chatFormUClose" parentId="qun'+qunid+'" chatDivID="' + chatDivID + '"><span>关闭</span></div>              '
		html+='    </div>                                                                                      '
		html+='    <div class="chatFormYin">                                                                   '
		html+='    		<li class="">                                                                          '
    	html+='    			<div class="menu_list_icon viewqun"></div>                                       '
    	html+='    			群成员                                                                             '
		html+='    		</li>                                                                                  '
		html+='    		<li class="">                                                                          '
		html+='    		    <div class="menu_list_icon viewInfo"></div>                                        '
		html+='    		    群资料                                                                           '
		html+='    		</li>                                                                                  '
		html+='    		<li class="">                                                                          '
		html+='    		    <div class="menu_list_icon viewRecord"></div>                                      '
		html+='    		    聊天记录                                                                           '
		html+='    		</li>                                                                                  '
		html+='    </div>                                                                                      '
		html+='    <div class="chatFormC"></div>                                                               '
		html+='    <div class="chatFormD">                                                                     '
		html+='         <div class="biaoqing"><span class="Btnimages"></span></div>                            '
		html+='         <input class="messages">															   '
		html+='         <div class="send"><span>发送</span></div>                                              '
		html+='    </div>                                                                                      '
		html+=' </div>                                                                                         '
	
			

		$(".mainRight").append(html);
		$(".chatForm").css("z-index","15");


		$(".chatForm").click(function(){
			$(".chatForm").css("z-index","15");
			$(this).css("z-index","16");
		});
		$(".chatFormUClose").click(function(){
			var curCloseDivID = $(this).attr("chatDivID");
			$(this).parent().parent("#" + curCloseDivID).remove();
			$("#min"+curCloseDivID).remove();


			var parentId = $(this).attr("parentId");
			$("." + parentId).attr("isOpen","false");

			
		});


		var html1="";

		html1+='	<div class="qun qun'+qunid+'" name='+ qname +' num='+num+' qunid='+qunid+'>       '
		html1+='		<div class="qunImg"><img src="images/'+imageId+'.jpg"></div>                          '
		html1+='		<div class="qunName"><span>'+ qname +'</span></div>                                    '
		//html1+='		<div class="friendSay"><span>'+ xiaoxi +'</span></div>                                   '
		html1+='	</div>                                                                                       '
		
			if (num==1) {
			$(".huihua").append(html1);
			$(this).attr("num","0");
		}
	$(document).on("click",".qun",function(){
			var qunid=$(this).attr("qunid");
			$("#chatFormQ"+qunid).show();
			$("#chatFormQ"+qunid).children().children(".chatFormUHide").attr("close","1");
			$("#minchatFormQ"+qunid).remove();
			$(".chatForm").css("z-index","15");
			$("#chatFormQ"+qunid).css("z-index","16");
		});
		

	});
	//讨论组
	$(".chat").click(function(){
		var chatid=$(this).attr("chatid");
		var html="";
		var cname=$(this).attr("cname");
		var num=$(this).attr("num");
		var imageId=$(this).children().attr("imageId")
		var chatDivID = "chatFormT" + chatid;


		if ($(this).attr("isOpen") == "true") {
			//将已经打开的窗口置顶
			$(".chatForm").css("z-index","15");
			$("#" + chatDivID).css("z-index","16");
			$("#"+chatDivID).fadeIn();
			$("#min"+chatDivID).remove();
			$("#"+chatDivID).children().children(".chatFormUHide").attr("close","1");
			return;
		}
		$(this).attr("isOpen","true");


		html+='  <div class="chatForm" id="' + chatDivID + '">                                                                        '
		html+='     <div class="chatFormU">                                                                    '
		html+='    		<div class="chatFormU1" yincang="1"><img src="images/pannel-arrow-down.png"></div>     '
		html+='    		<div class="chanFormUName" content="'+ cname +'">'+ cname +'</div>                                          '
		html+='    		<div class="chatFormUHide" close="1"><span>最小化</span></div>                                   '
		html+='    		<div class="chatFormUClose" parentId="chat'+chatid+'" chatDivID="' + chatDivID + '"><span>关闭</span></div>              '
		html+='    </div>                                                                                      '
		html+='    <div class="chatFormYin">                                                                   '
		html+='    		<li class="">                                                                          '
    	html+='    			<div class="menu_list_icon viewqun"></div>                                       '
    	html+='    			讨论组成员                                                                             '
		html+='    		</li>                                                                                  '
		html+='    		<li class="">                                                                          '
		html+='    		    <div class="menu_list_icon viewInfo"></div>                                        '
		html+='    		    讨论组资料                                                                           '
		html+='    		</li>                                                                                  '
		html+='    		<li class="">                                                                          '
		html+='    		    <div class="menu_list_icon viewRecord"></div>                                      '
		html+='    		    聊天记录                                                                           '
		html+='    		</li>                                                                                  '
		html+='    </div>                                                                                      '
		html+='    <div class="chatFormC"></div>                                                               '
		html+='    <div class="chatFormD">                                                                     '
		html+='         <div class="biaoqing"><span class="Btnimages"></span></div>                            '
		html+='         <input class="messages">															   '
		html+='         <div class="send"><span>发送</span></div>                                              '
		html+='    </div>                                                                                      '
		html+=' </div>                                                                                         '
	
			

		$(".mainRight").append(html);
		$(".chatForm").css("z-index","15");


		$(".chatForm").click(function(){
			$(".chatForm").css("z-index","15");
			$(this).css("z-index","16");
		});
		$(".chatFormUClose").click(function(){
			var curCloseDivID = $(this).attr("chatDivID");
			$(this).parent().parent("#" + curCloseDivID).remove();
			$("#min"+curCloseDivID).remove();


			var parentId = $(this).attr("parentId");
			$("." + parentId).attr("isOpen","false");

			
		});

		
		var html1="";

		html1+='	<div class="chat chat'+chatid+'" name='+ cname +' num='+num+' chatid='+chatid+'>       '
		html1+='		<div class="chatImg"><img src="images/'+imageId+'.png"></div>                          '
		html1+='		<div class="chatName"><span>'+ cname +'</span></div>                                    '
		//html1+='		<div class="friendSay"><span>'+ xiaoxi +'</span></div>                                   '
		html1+='	</div>                                                                                       '


		if (num==1){
			$(".huihua").append(html1);
			$(this).attr("num","0");
		}

		$(document).on("click",".chat",function(){
			var chatid=$(this).attr("chatid");
			$("#chatFormT"+chatid).show();
			$("#chatFormT"+chatid).children().children(".chatFormUHide").attr("close","1");
			$("#minchatFormT"+chatid).remove();
			$(".chatForm").css("z-index","15");
			$("#chatFormT"+chatid).css("z-index","16");
		});

	});
	
});
/*聊天窗口拖动*/
$(function(){
	$(document).on("mouseover",".chatForm",function(){
		$(".chatForm").draggable({ handle: ".chatFormU" });
	});
});

/*消息发送*/
$(function(){
	$(document).on("click",".send",function(){
		var xiaoxi=$(this).prev(".messages").val();
		$(this).prev(".messages").val("");
		var html="";

		html+='  <span>                                                                                             '
		html+='    <div class="touxiang"><img src="images/g.jpg"></div>                                             '
		html+='    <div class="info"><span>'+ xiaoxi +'</span></div>                                                '
		html+='  </span>                                                                                            '

		$(this).parent().prev(".chatFormC").append(html);


		
	});
});
/*最小化*/
$(function(){
	$(document).on("click",".chatFormUHide",function(){
		var close=$(this).attr("close");
		var html="";
		var name=$(this).prev(".chanFormUName").attr("content")
		var id=$(this).parent().parent(".chatForm").attr("id");
		var chatDivID="min"+id;

		html+='<div class="min1" id="' + chatDivID + '">'
		html+='   <span>'+ name +'</span>'
		html+='</div>'

		if (close==1) {
			$(".min").append(html);
			$(this).attr("close","0");
			$(this).parent().parent(".chatForm").fadeOut();
		}else{
			$(this).parent().parent(".chatForm").fadeOut();
			$(this).attr("close","1");
		}

	});
	$(document).on("click",".min1",function(){
		var str=$(this).attr("id");
		var id=str.substring(3);
		$("#"+id).fadeIn();
		$(this).remove();
		$("#"+id).children().children(".chatFormUHide").attr("close","1");
		$(".chatForm").css("z-index","15");
		$("#"+id).css("z-index","16");
	});
});
/*QQ状态更改*/
$(function(){
	$(".setUp13").click(function(){
		$(".state").slideDown();
		return false;
	});
	$(document).click(function(){
		$(".state").slideUp();
	});
	$(".state li").click(function(){
		var aa=$(this).children().attr("class");
		$(".setUp131").attr("class","setUp131");
		$(".headerImg i").attr("class","setUp131");
		$(".setUp131").addClass(aa);
		$(".headerImg i").addClass(aa);
	});
});
/*消息设置*/
$(function(){
	$(".setUp2").click(function(){
		$(".setForm").show();
	});
	$(".setFormU1").click(function(){
		$(".setForm").hide();
	});
});