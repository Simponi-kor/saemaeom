<?php
    include "./include/connect_db.php";
    $sql = "select * from nse_tb order by no desc limit 1";
    $res = $connect->query($sql);
    $showContent = $res->fetch_array(MYSQLI_ASSOC);
    echo $showContent['content'];
?>