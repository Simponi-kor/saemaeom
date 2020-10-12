<?php

include("../db/dbcon.php");
session_start();

$rating = htmlentities(trim($_POST['rating']));
$content = htmlentities(trim($_POST['tarea']));
$pro_num = htmlentities(trim($_POST['product_num']));
$pro_img = htmlentities(trim($_POST['product_img']));
$id = $_SESSION['id'];
$name = $_SESSION['name'];

$sql = "INSERT INTO review_table(product_num, wid, wname, ranking, content, product_img) VALUES($pro_num, '$id', '$name', $rating, '$content', '$pro_img')";
if($_FILES) {
    $review_img = $_FILES['review_img']['name'];
    $uploadfile = '../img/review/'.basename($_FILES['review_img']['name']);
    if(move_uploaded_file($_FILES['review_img']['tmp_name'], $uploadfile)) {
        $sql = "INSERT INTO review_table(product_num, wid, wname, ranking, content, product_img, review_img) VALUES($pro_num, '$id', '$name', $rating, '$content', '$pro_img', '$review_img')";
    }
}
// echo $sql;
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