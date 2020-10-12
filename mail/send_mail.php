<?php 

include("mailer.lib.php");

$email = htmlentities(trim($_POST['email']));

// $id = "phpmailer@naver.com";

$rand = str_pad(mt_rand(0, 999999), 6, "3");
$date = date("Y-m-d H:i");


$content = "<img style='width: 120px; height: 60px;' src='../img/logo.png' alt='logo'><div style='width: 800px; padding: 30px; box-shadow: 3px 2px 10px 3px gray;'><h1>인증번호를 알려드립니다</h1><div style='width: 100%; border-top: 3px solid #afafaf; text-align: left;'><h2>안녕하세요 새마음 입니다</h2> <p>이메일 인증번호를 입력하시면 인증절차가 완료됩니다. <br><br><font style='color: red'>인증번호 6자리를 진행중인 화면에 입력해 주세요.</font><br>인증번호는 메일이 발송된 시점부터 <b>3분간만 유효</b>합니다.</p><br><div style='width: 400px; height: 50px; padding: 25px 200px; background-color: #F9F9F9'><ul style='margin: 0 auto;'><li><b style='float: left;'>인증번호 : {$rand}</b></li><li><b style='float: left;'>발급일시 : {$date}</b></li></ul></div><br><br><b>감사합니다</b></div></div>";
// $content = `rand`;

// mailer("보내는 사람 이름", "보내는 사람 메일주소", "받는 사람 메일주소", "제목", "내용", "type");


if(mailer("새마음", "phpmailer@naver.com", "{$email}", "새마음 인증메일 입니다", "{$content}", 1)) {
	echo json_encode(array('res'=>$rand));
}else {
	echo json_encode(array('res'=>'bad'));
}


?>