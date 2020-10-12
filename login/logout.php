<?php
session_start();
include ("../db/dbcon.php");

if(isset($_SESSION['id'])){
    session_destroy();
    echo'<script>alert("로그아웃 되었습니다");location.href="../"</script>';

}else{
    echo'<script> alert("잘못된 접근입니다."); location.href="../" </script>';
}

?>
