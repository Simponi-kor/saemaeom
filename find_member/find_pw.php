<?php

include("../db/dbcon.php");

$name = htmlentities(trim($_POST['name']));
$id = htmlentities(trim($_POST['id']));

$email = htmlentities(trim($_POST['email']));
$hidden_email = htmlentities(trim($_POST['mail_rand']));
$user_email = htmlentities(trim($_POST['user_rand']));


$sql = "SELECT * FROM member WHERE id='$id' AND email='$email'";
$result = $mysqli->query($sql);
$row = mysqli_fetch_array($result);

if(COUNT($row)<=0) {
	echo "<script>
	alert('정보가 일치하지 않습니다.');
	history.back();	
	</script>";
	exit;
}

if($user_email != $hidden_email) {
	echo "<script>
		alert('이메일 인증번호가 같지 않습니다.'); 
		history.back();
	</script>";
	exit;
}

?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../css/find_pw.css?ver">
	<title>새마음</title>
</head>
<body onselectstart="return false">

	<section>
		<div class="logo">
			<a href="../">
				<img src="../img/logo.png" alt="logo">
			</a>
		</div>
		<div class="find">비밀번호 찾기</div>
		<span class="guide">새로운 비밀번호를 입력해 주세요.</span>
		<form class="form_div" method="post" action="find_pw_action.php">
			<input type="hidden" name="id" value="<?=$id?>">
			<div class="form_block">
				<div class="form_block_head">
					<p>
						<em class="plus_green">*</em>
						비밀번호
					</p>
				</div>
				<div class="form_block_body">
					<input type="password" class="input" name="pw" placeholder="비밀번호를 입력해주세요" autocomplete="off" required>
				</div>
			</div>
			<div class="form_block">
				<div class="form_block_head">
					<p>
						<em class="plus_green">*</em>
						비밀번호 확인
					</p>
				</div>
				<div class="form_block_body">
					<input type="password" class="input" name="pw_check" placeholder="비밀번호를 다시 한번 입력해주세요" autocomplete="off" required>
				</div>
			</div>

			<input type="submit" value="비밀번호 변경 완료" class="submit">
		</form>
	</section>

</body>
</html>