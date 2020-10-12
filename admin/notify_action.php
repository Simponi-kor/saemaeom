<?php

include("../db/dbcon.php");

$user_id = htmlentities(trim($_POST['user_id_hidden']));
$mcategory = htmlentities(trim($_POST['m_category']));
$message = htmlspecialchars(htmlentities(trim($_POST['message'])));

// echo $user_id."<br>".$mcategory."<br>".$message."<br>";

if($message == "") {
    echo "<script>
            alert('알림을 입력하여 주십시오.');
            history.back();
        </script>";
    exit;
}

$sql = "INSERT INTO notify(user_id, mcategory, message) VALUES('$user_id', '$mcategory', '$message')";
$result = $mysqli->query($sql);

if($result) {
    echo "<script>
        alert('알림을 보냈습니다.');
        location.href='./index.html';
    </script>";
}else {
    echo "<script>
        alert('알림 보내기 실패!');
        history.back();
    </script>";
}

?>