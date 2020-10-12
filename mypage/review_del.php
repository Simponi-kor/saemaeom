<?php

include("../db/dbcon.php");
// session_start();

$review_num = htmlentities(trim($_GET['num']));



$sql = "DELETE FROM review_table WHERE wnum=$review_num";
if($result = $mysqli->query($sql)) {
    echo "<script>
        alert('삭제 되었습니다.');
        history.back();
    </script>";
}else {
    echo "<script>
        alert('삭제 실패.');
        history.back();
    </script>";
}