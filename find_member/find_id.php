<?php

include("../db/dbcon.php");

$name = htmlentities(trim($_POST['name']));
$email = htmlentities(trim($_POST['email']));

$sql = "SELECT * FROM member WHERE name='$name' AND email='$email'";
$result = $mysqli->query($sql);
$row = mysqli_fetch_array($result);

if(COUNT($row)<=0) {
	echo "<script>
	alert('정보와 일치하는 아이디가 존재하지 않습니다.');
	history.back();	
	</script>";
	exit;
}


?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/find_id.css?ver">
	<title>새마음</title>
</head>
<body onselectstart="return false">

	<section>
		<div class="logo">
			<a href="../">
				<img src="../img/logo.png" alt="logo">
			</a>
		</div>
		<div class="find">아이디 찾기</div>

		<div class="id_imformation">
			<h4><?=$row['name']?>님의 아이디는 <span style="color: #83dda7;">"<?=$row['id']?>"</span> 입니다</h4>
		</div>
		
		<div class="flex_btn">
			<button type="button" class="btn" onclick="location.href='./find_pw.html'">비밀번호 찾기</button>
			<button type="button" class="btn" onclick="location.href='../login/index.html'">로그인 하기</button>
		</div>
		
	</section>

</body>
</html>