<?php
session_start();
include ("../db/dbcon.php");

$id = htmlentities(trim($_POST['id']));
$pw = htmlentities(trim($_POST['ps']));


if($id == "" || $pw == ""){

        echo '<script> alert("아이디나 비밀번호를 입력하세요"); location.href="./" </script>';

}else{

    $s_sql = "SELECT * FROM member WHERE id='{$id}'";
    $s_result = $mysqli->query($s_sql);
    $s_row = mysqli_fetch_array($s_result);


    if($s_row>0){
        if(password_verify($pw, $s_row['pw'])){
                $_SESSION['id'] = $id;
                $_SESSION['name'] = $s_row['name'];
                $_SESSION['grade'] = $s_row['grade'];
                if(isset($_POST['id_rem'])) {
                    setcookie("id_remember", "$id", time()+(3600*24*7), "/");
                }

            echo'<script> alert("로그인 되었습니다."); location.href="../"; </script>';

        }else{
            echo '<script> alert("비밀번호를 다시 한번 확인해주세요."); location.href="./"; </script>';
        }

    }else{
        echo '<script> alert("아이디를 다시 한번 확인해주세요."); location.href="./"; </script>';
    }
}

?>

