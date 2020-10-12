<?php
include "../db/dbcon.php";

if(isset($_POST['number'])){
    $number = htmlentities(trim($_POST['number']));
    $selected = htmlentities(trim($_POST['selected']));
}
if($selected == "maketer") {
    $grade = 2;
}else {
    $grade = 3;
}

$sql = "UPDATE member SET grade=$grade WHERE num = $number";


$result = $mysqli->query($sql);



if($result === false){
    echo json_encode(array('res'=>'fail'));
}else{
    echo json_encode(array('res'=>'good'));
}

?>
