<?php

include("../db/dbcon.php");
// session_start();

$content = htmlentities(trim($_POST['tarea']));
$pro_num = htmlentities(trim($_POST['product_num']));
// $pro_img = htmlentities(trim($_POST['product_img']));
// $id = $_SESSION['id'];
// $name = $_SESSION['name'];


$sql = "UPDATE qa_table SET content='$content' WHERE qa_num = $pro_num";
if($result = $mysqli->query($sql)) {
    echo "<script>
        alert('수정 되었습니다.');
        location.href='./QA.html';
    </script>";
}else {
    echo "<script>
        alert('수정 실패.');
        history.back();
    </script>";
}

?>