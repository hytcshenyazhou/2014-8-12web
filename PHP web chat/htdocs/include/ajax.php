<?php
	session_start();
	include_once "ez_sql_core.php";
	include_once "ez_sql_mysql.php";  
	$flag=isset($_POST["flag"])?$_POST["flag"]:"";
	$msg=isset($_POST["msg"])?$_POST["msg"]:"";
	$senderid=isset($_POST["senderid"])?$_POST["senderid"]:"";
	$receiveid=isset($_POST["receiveid"])?$_POST["receiveid"]:"";
	$db=new ezSQL_mysql();
	if ($flag=="sendMsg") {
		$sql="insert into messagesinfo (id,msgContent,msgSender,msgReceiver,msgSendTime,msgState)";
		$sql.=" values(null,'$msg',$senderid,$receiveid,now(),'unread')";
		$res=$db->query($sql);
		if (!$res) {
			echo "发送失败";
		}else{
			echo "发送成功";
		}
		die();
	}

	$curUserID=isset($_SESSION["myId"])?$_SESSION["myId"]:"";
	if ($flag=="getUnreadMsg") {
		if ($curUserID=="") {
			echo "请登录";
			die();
		}
		$sql="select * from messagesinfo where msgReceiver = $curUserID and msgState='unread'";
		$res=$db->get_results($sql);
		echo json_encode($res);
	}
?>