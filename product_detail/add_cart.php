<?php

include "../db/dbcon.php";
session_start();

if(isset($_POST['num']) && isset($_POST['option'])){
    $num = htmlentities(trim($_POST['num']));
    $option = htmlentities(trim($_POST['option']));
}

$id = $_SESSION['id'];

$sql = "SELECT * FROM cart WHERE id = '$id'";
$result = $mysqli->query($sql);
while($row = mysqli_fetch_array($result)){
    if($row['product_num']==$num && $row['option_name']==$option) {
        echo json_encode(array('res'=>'bad'));
        exit;
    }
}



$sql = "INSERT INTO cart(id, product_num, option_name) VALUES('$id', '$num', '$option')";
$result = $mysqli->query($sql);
if($result) {
    echo json_encode(array('res'=>'good'));
}else {
    echo json_encode(array('res'=>'bad'));
}


// if($row > 0){
//     echo json_encode(array('res'=>'bad'));
// }else{
//     echo json_encode(array('res'=>'good'));
// }


?>