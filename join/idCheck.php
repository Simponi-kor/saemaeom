<?php
include "../db/dbcon.php";

if(isset($_POST['id'])){
    $id = htmlentities(trim($_POST['id']));
}


$sql = "SELECT * FROM member WHERE id = '{$id}'";


$result = $mysqli->query($sql);


$row = mysqli_fetch_array($result);

if($row > 0){
    echo json_encode(array('res'=>'bad'));
}else{
    echo json_encode(array('res'=>'good'));
}

?>
