<?php

include("../db/dbcon.php");
// session_start();

$qa_num = htmlentities(trim($_GET['num']));



$sql = "DELETE FROM qa_table WHERE qa_num=$qa_num";
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

?>