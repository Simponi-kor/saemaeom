<?php
include "../db/dbcon.php";

if(isset($_POST['number'])){
    $number = htmlentities(trim($_POST['number']));
}


$sql = "DELETE FROM notify WHERE num = $number";


$result = $mysqli->query($sql);



if($number === false){
    echo json_encode(array('res'=>'fail'));
    // echo "fail";
}else{
    // echo "good";
    echo json_encode(array('res'=>'good'));
}

?>
