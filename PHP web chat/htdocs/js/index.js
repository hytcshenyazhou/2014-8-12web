function fail(){
	alert("fail to login! please retry again!");
}
function need(){
	alert("fail to login! please login!");
}


$(function(){
	iniDelegate();
	//setInterval('getUnreadMsg()',1000);
	getUnreadMsg();
});

//获取自己的所有未读消息
function getUnreadMsg(){
	var html="";
	$.ajax({
		type:"POST",
		url:"include/ajax.php",
		data:{flag:'getUnreadMsg'},
		success:function(res){
			var objs=eval("(" + res + ")");
			$.each(objs,function(){
				
			});
		}
	});
	$(".friendli").click(function(){
		var friendid=$(this).attr("friendid");
		alert(friendid);
	});
}



function iniDelegate(){
	$(".friendli").click(function(){
		var istalking=$(this).attr("istalking");
		if (istalking=="yes") {
			return;
		};
		$(".friendli").attr("istalking","no");
		$(this).attr("istalking","yes");
		$(".chatform").show();
		var friendNoteName=$(this).attr("friendNoteName");
		var friendid=$(this).attr("friendid");
		$(".chatTitle").html(friendNoteName);
		$(".btnSend").attr("friendid",friendid);
	});

	$(".btnSend").click(function(){
		var msg=$("#txtMsg").val();
		if (msg=="") {return};
		$("#txtMsg").val("");
		//将当前消息插入数据库
		var receiveid=$(".btnSend").attr("friendid");
		var senderid=$(".info").attr("curuserid");
		$.ajax({
			type:"POST",
			url:"include/ajax.php",
			data:{flag:'sendMsg',msg:msg,senderid:senderid,receiveid:receiveid},
			success:function(res){
				
			}
		});
	});
}
