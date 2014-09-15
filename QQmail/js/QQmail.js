//全选和取消
$(function(){
	$(".selectAll").click(function(){
	    if($(".selectAll").prop("checked") == true){
	        $(".select").prop("checked",true);
	    }else{
	        $(".select").prop("checked",false); 
	    }
	});
});
//删除邮件
$(function(){
	$(".Amails").text($(".select").length); 
	$(".Tmails").text($(".Tmails").parent().next().find(".select").length); 
	$(".Tumails").text($(".Tumails").parent().next().find(".select").length); 
	$(".Eamails").text($(".Eamails").parent().next().find(".select").length);

	$(".Dmails").text($(".Dmails").parent().next().find(".select").length); 

	$(".Sdelete").click(function(){
		$(".select:checked").parent().parent().parent().remove(); 
		$(".Amails").text($(".select").length);
		$(".Tmails").text($(".Tmails").parent().next().find(".select").length); 
		$(".Tumails").text($(".Tumails").parent().next().find(".select").length); 
		$(".Eamails").text($(".Eamails").parent().next().find(".select").length);

		$(".Dmails").text($(".Dmails").parent().next().find(".select").length);    
	});
});
//全部标记为已读
$(function(){
	$(".Amark").click(function(){
		$("*").find(".cir").removeClass("Ru");
		$("*").find(".cir").addClass("Rr");
		$("*").find(".tl").addClass("no");
		$("*").find(".black").removeClass("fw");
		$("*").find(".dt").removeClass("fw");
	});
});
//星标邮件
$(function(){
	$(".fg").click(function(){
		var shuzhi=$(this).attr("shuzhi");
		if (shuzhi==1) {
			$(this).children().css("background-position","-48px -160px");
			$(this).attr("shuzhi","0");
		}else{
			$(this).children().css("background-position","-32px -160px");
			$(this).attr("shuzhi","1");
		}
	});
});

//标记为
$(function(){
	$(".mark").click(function(){
		$(".umark").show();
		return false;
	});
	$(document).click(function(){
		$(".umark").hide();
	});
	$(".markD").click(function(){
		$(".umarkD").show();
		return false;
	});
	$(document).click(function(){
		$(".umarkD").hide();
	});
	$(".umark1").click(function(){
		$(".select:checked").parent().parent().parent().find(".cir").removeClass("Ru");
		$(".select:checked").parent().parent().parent().find(".cir").addClass("Rr");
		$(".select:checked").parent().parent().parent().find(".tl").addClass("no");
		$(".select:checked").parent().parent().parent().find(".black").removeClass("fw");
		$(".select:checked").parent().parent().parent().find(".dt").removeClass("fw");
	});
	$(".umark2").click(function(){
		$(".select:checked").parent().parent().parent().find(".cir").removeClass("Rr");
		$(".select:checked").parent().parent().parent().find(".cir").addClass("Ru");
		$(".select:checked").parent().parent().parent().find(".tl").addClass("fw");
		$(".select:checked").parent().parent().parent().find(".black").addClass("fw");
		$(".select:checked").parent().parent().parent().find(".dt").addClass("fw");
	});
	$(".umark3").click(function(){
		$(".select:checked").parent().parent().parent().find(".fg div").css("background-position","-48px -160px");
	});
	$(".umark4").click(function(){
		$(".select:checked").parent().parent().parent().find(".fg div").css("background-position","-32px -160px");
	});
});













// /*收件箱 已删除*/
// $(function(){
// 	$(".receive").click(function(){
// 		$(".content").show();
// 		$(".yidelete").hide();
// 	});
// 	$(".yishanchu").click(function(){
// 		$(".yidelete").show();
// 		$(".content").hide();
// 	});
// });



// /*已删除*/
// $(function(){
// 	$(".delete").click(function(){
// 		var html="";

// 		html+='			<table cellspacing="0" class="TT">'
// 		html+='				<tbody>'
// 		html+='					<tr>'
// 		html+='						<td class="cx">'
// 		html+='							<input type="checkbox" title="选中/取消选中"class="select">'
// 		html+='						</td>'
// 		html+='						<td class="ci">'
// 		html+='							<div class="ciz ">&nbsp;</div>'
// 		html+='							<div class="cir Ru" title="">&nbsp;</div>'
// 		html+='							<div class="cij" title="附件">&nbsp;</div>'
// 		html+='						</td>'
// 		html+='						<td class="cm">'
// 		html+='							<table cellspacing="0" class="cmcontent">'
// 		html+='								<tbody>'
// 		html+='									<tr>'
// 		html+='										<td class="tl tf">gm@service.netease.com&nbsp;</td>'
// 		html+='										<td class="fg_n"></td>'
// 		html+='										<td class="gt">'
// 		html+='											<div class="tf no">'
// 		html+='												<u tabindex="0" class="black fw ">网易帐号修复支持中心-用户通知（请不要回复此邮件）'
// 		html+='												</u>'
// 		html+='												<b class="no">&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;帮助指引&nbsp;|&nbsp;手机将军令&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;尊敬的网易用户：&nbsp;&nbsp;您的帐号修复申请有进一步处理结果，请尽快通过以下'
// 		html+='												</b>&nbsp;'
// 		html+='											</div>'
// 		html+='										</td>'
// 		html+='										<td class="dt fw">'
// 		html+='											<div>一小时前</div>'
// 		html+='										</td>'
// 		html+='										<td class="fg">'
// 		html+='											<div></div>'
// 		html+='										</td>'
// 		html+='									</tr>'
// 		html+='								</tbody>'
// 		html+='							</table>'
// 		html+='						</td>'
// 		html+='					</tr>'
// 		html+='				</tbody>'
// 		html+='			</table>'

// 		$(".DList").append(html);
// 	});
// });