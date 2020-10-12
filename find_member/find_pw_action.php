<?php

include("../db/dbcon.php");

$id = htmlentities(trim($_POST['id']));
$pw = htmlentities(trim($_POST['pw']));
$pw_check = htmlentities(trim($_POST['pw_check']));
$hash_pw = password_hash($pw, PASSWORD_DEFAULT);

if(mb_strlen($pw, 'utf-8' )<8 || mb_strlen($pw, 'utf-8' )>20){
	echo "<script>
		alert('비밀번호는 영문과 숫자 조합 8글자 이상 20글자 이하로 만들어 주십시오.'); 
		history.back();
	</script>";
	exit;
}

if($pw != $pw_check) {
	echo "<script>
		alert('비밀번호가 일치하지 않습니다.'); 
		history.back();
	</script>";
	exit;
}


$sql = "UPDATE member SET pw='$hash_pw' WHERE id='$id'";
if($mysqli->query($sql)) {
	echo "<script>
		alert('비밀번호가 변경되었습니다.'); 
		location.href='../';
	</script>";
}

?>