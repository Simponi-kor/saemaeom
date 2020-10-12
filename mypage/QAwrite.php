<?php

include("../db/dbcon.php");
session_start();

$radio = htmlentities(trim($_POST['radio']));
$content = htmlentities(trim($_POST['tarea']));
$pro_num = htmlentities(trim($_POST['product_num']));
$pro_img = htmlentities(trim($_POST['product_img']));
$id = $_SESSION['id'];
$name = $_SESSION['name'];


$sql = "INSERT INTO QA_table(product_num, qid, qname, qa_category, content, product_img) VALUES($pro_num, '$id', '$name', '$radio', '$content', '$pro_img')";
if($result = $mysqli->query($sql)) {
    echo "<script>
        alert('작성 되었습니다.');
        location.href='./order_product.html';
    </script>";
}else {
    echo "<script>
        alert('작성 실패.');
        history.back();
    </script>";
}

?>