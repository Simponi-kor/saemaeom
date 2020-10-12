<?php

include "../db/dbcon.php";

if(isset($_POST['num'])){
    $num = htmlentities(trim($_POST['num']));
}


$sql = "DELETE FROM cart WHERE cart_num=$num";
$result = $mysqli->query($sql);
if($result) {
    echo json_encode(array('res'=>'good'));
}else {
    echo json_encode(array('res'=>'bad'));
}


?>