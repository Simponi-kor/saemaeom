<?php
include "./include/connect_db.php"; // 데이터 베이스 접속 프로그램 불러오기
$nse_content = $connect->escape_string($_POST['ir1']);
$sql = "insert into nse_tb(content)";
$sql .= " values ('{$nse_content}')";
$res = $connect->query($sql);
echo htmlentities($nse_content);
if($res){
    //입력 성공시
    echo "데이터베이스에 성공적으로 입력되었습니다 결과를 보시려면 <a href='./show.php' target='_blank'>여기</a>를 누르세요.";
} else{
    echo "fail"; // 디비 입력 실패시 fail표시
}
?>