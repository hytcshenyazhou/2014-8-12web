<?php
	session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>登陆</title>
	<link rel="stylesheet" type="text/css" href="css/login.css">
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
	<meta charset="utf-8"/>
</head>
<body>
	<div class="bg">
		<div class="main">
			<form action="index.php" method="post">
				<div class="bd">
					<span>用户名：</span>
					<input name="userid" type="text" id="txtUserid" />
				</div>
				<div class="bd">
					<span>密&nbsp;&nbsp;&nbsp;码：</span>
					<input name="userpwd" type="password" id="txtUserpwd" />
				</div>

				<input type="submit" value="登  陆" id="btnLogin" />
			</form>
			<?php
				$info=isset($_GET["error"])?$_GET["error"]:"";
				$logout=isset($_GET["logout"])?$_GET["logout"]:"";
				if ($info=="wrongpwd") {		
					echo "<script>fail();</script>";
				}
				if ($info=="needlogin") {		
					echo "<script>need();</script>";
				}
				if ($logout=="yes") {
					unset($_SESSION["myId"]);
					unset($_SESSION["myNickname"]);
				}
			?>
		</div>
	</div>
</body>
</html>