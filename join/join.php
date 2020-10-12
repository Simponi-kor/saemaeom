<?php

include("../db/dbcon.php");

$id = htmlentities(trim($_POST['id']));
$pw = htmlentities(trim($_POST['pw']));
$hash_pw = password_hash($pw, PASSWORD_DEFAULT);

$name = htmlentities(trim($_POST['name']));

$email = htmlentities(trim($_POST['email']));
$hidden_email = htmlentities(trim($_POST['mail_rand']));
$user_email = htmlentities(trim($_POST['user_rand']));

$address_port = htmlentities(trim($_POST['address_port']));
$address = htmlentities(trim($_POST['address']));
$address_detail = htmlentities(trim($_POST['address_detail']));

$phone = htmlentities(trim($_POST['phone']));

$sql = "SELECT * FROM member WHERE id='{$id}'";
$result = $mysqli->query($sql);
$row = mysqli_fetch_array($result);
$db_id = $row['id'];

if($id == $db_id) {
	echo "<script>alert('중복된 아이디 입니다.'); history.back();</script>";
	exit;
}

if($user_email != $hidden_email) {
	echo "<script>
		alert('이메일 인증번호가 같지 않습니다.'); 
		history.back();
	</script>";
	exit;
}

if(mb_strlen($pw, 'utf-8' )<8 || mb_strlen($pw, 'utf-8' )>20){
	echo "<script>
		alert('비밀번호는 영문과 숫자 조합 8글자 이상 20글자 이하로 만들어 주십시오.'); 
		history.back();
	</script>";
	exit;
}

$sql = "INSERT INTO member(id, pw, name, email, phone, address_port, address, address_detail) VALUES('{$id}', '{$hash_pw}', '{$name}', '{$email}', '{$phone}', '{$address_port}', '$address', '$address_detail')";
if($result = $mysqli->query($sql)) {
	$sql = "CREATE TABLE $id";
	$mysqli->query($sql);
	echo "<script>
		alert('회원가입을 환영합니다.'); 
		location.href='../';
	</script>";
}


?>