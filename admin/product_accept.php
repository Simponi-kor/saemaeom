<?php
include "../db/dbcon.php";

if(isset($_POST['number'])){
    $number = htmlentities(trim($_POST['number']));
}

$sql = "UPDATE product SET accept=1 WHERE num = $number";

$result = $mysqli->query($sql);

if($result === false){
    echo json_encode(array('res'=>'fail'));
}else{
    echo json_encode(array('res'=>'good'));
}

?>
