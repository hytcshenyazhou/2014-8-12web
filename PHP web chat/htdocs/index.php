<?php 
	include_once "include/ez_sql_core.php";
	include_once "include/ez_sql_mysql.php";
	session_start();
	$userid=isset($_POST["userid"])?$_POST["userid"]:"";
	$userpwd=isset($_POST["userpwd"])?$_POST["userpwd"]:"";
	$id=isset($_SESSION["myId"])?$_SESSION["myId"]:"";
	if ($userid !="" && $userpwd !="") {
		$db=new ezSQL_mysql();
		$sql="select * from userinfo where id=" . $userid . " and userpwd='". $userpwd ."'";
		$res=$db->get_row($sql);
		if (!$res) {
			header("location:login.php?error=wrongpwd");
			die();
		}else{
			//将当前成功登陆的人的信息写入session中
			$_SESSION["myId"]=$userid;
			$_SESSION["myNickname"]=$res->userNickname;
			//echo "success to login welcome " . $res->userNickname;
		}
	}

	$curid=isset($_SESSION["myId"])?$_SESSION["myId"]:"";
	$curNickname=isset($_SESSION["myNickname"])?$_SESSION["myNickname"]:"";
	if ($curid == "") {
		header("location:login.php?error=needlogin");
		die();
	}else{
	}
?>


<!DOCTYPE html>
<html>
<head>
	<title>Web Chat</title>
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	<meta charset="utf-8">
</head>
<body>
	<div class="mainbg">
		<div class="welcome">
			<span>
			<?php 
				echo "欢迎你 " . $curNickname;
			?>
			</span>
			<a href="login.php?logout=yes">注销</a>
		</div>
		<div class="friendslist">
			<?php  
			$db=new ezSQL_mysql();
			$sql="select userinfo.id,userinfo.userNickname,userinfo.userHeadImage,userinfo.userState,friendsinfo.friendNoteName from userinfo,friendsinfo where userinfo.id=friendsinfo.friendid and friendsinfo.userid=$curid";
			$res=$db->get_results($sql);
			if ($res) {
				$offlineHtml="";
				$onlineHtml="";
				foreach ($res as $friend) {
					$curHeadeimageUrl=$friend->userHeadImage;
					if ($friend->userState=="online") {
						$onlineHtml .="<li class='friendli' friendid='$friend->id' friendNoteName='$friend->friendNoteName'><img src='$curHeadeimageUrl' class='friendHeadimage'/><div class='friendNoteName'>$friend->friendNoteName</div><div class='state'>【在线】</div><li>";
					}else{
						$offlineHtml .="<li class='friendli' friendid='$friend->id' friendNoteName='$friend->friendNoteName'><img src='$curHeadeimageUrl' class='friendHeadimage offlinePic'/><div class='friendNoteName'>$friend->friendNoteName</div><div class='state'>【离线】</div><li>";
					}
				}
			}

			//print_r($res);
	/*		 while(list($index,$content)=each($res)) {//读取二维数组
			 	             	?>
	             	<div style="width=200px height=30px;">
	             	<?php
	             while(list($key,$val)=each($content)) {

	           	 echo "$key: ";
	           	 echo "$val</br>";
	           	
	        	}
	        	 ?>
	             	</div>
	             	<?php
	        }*/
			// while ($row = mysql_fetch_array($res)) {
			// 	echo "$row[0]";
			// 	echo "<br/>";
			// }
			?>
			<ul class="onlinelist">
				<?php 
					echo $onlineHtml;
				?>
			</ul> 
			<ul class="offlinelist">
				<?php  
					echo $offlineHtml;
				?>
			</ul>
		</div>
		<div class="chatform">
			<div class="chatTitle"></div>
			<div class="chatHistory"></div>
			<div class="chatMsg">
				<input id="txtMsg" type="text" maxlength="4000" />
				<div class="btnSend">发送</div>
			</div>
		</div>
		<div class="info" curuserid="<?php echo $curid;?>"></div>
	</div>
</body>
</html>