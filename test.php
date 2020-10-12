<?php
// include('db/dbcon.php');
// session_start();
// $db_date = '2020-07-07';
// $current_date = date("Y-m-d");
// $start = new DateTime($current_date);
// $end = new DateTime($db_date);
// $date_diff =  date_diff($start, $end);

// echo $date_diff->days;
// $img2 = "&lt;img src=&quot;/saemaeom/img/product_detail/1_4.jpg&quot; title=&quot;1_4.jpg&quot;&gt;";
// $img = '<img src="/saemaeom/img/product_detail/1_4.jpg" title="1_4.jpg">';
// $di = "&lt;div style=&quot;text-align: center;&quot; align=&quot;center&quot;&gt;&lt;span style=&quot;font-size: 36pt;&quot;&gt;﻿&lt;span style=&quot;color: rgb(0, 117, 200);&quot;&gt;제주 test&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;div style=&quot;text-align: center;&quot; align=&quot;center&quot;&gt;&lt;span style=&quot;font-size: 36pt;&quot;&gt;&lt;span style=&quot;color: rgb(0, 117, 200);&quot;&gt;&lt;img src=&quot;/saemaeom/img/product_detail/1_4.jpg&quot; title=&quot;1_4.jpg&quot;&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;&lt;div style=&quot;text-align: center;&quot; align=&quot;center&quot;&gt;&lt;span style=&quot;font-size: 36pt;&quot;&gt;&lt;span style=&quot;color: rgb(0, 117, 200);&quot;&gt;제주 바다&lt;br style=&quot;clear:both;&quot;&gt;&lt;img src=&quot;/saemaeom/img/product_detail/3_5.jpg&quot; title=&quot;3_5.jpg&quot;&gt;&lt;br style=&quot;clear:both;&quot;&gt;&lt;br&gt;&lt;/span&gt;&lt;/span&gt;&lt;/div&gt;";
// echo htmlspecialchars($img2);
// echo "&bull;";
// htmlspecialchars_decode($row['content_img']);
// $sql = "SELECT * FROM cart WHERE id = '{$_SESSION['id']}'";
// $result = $mysqli->query($sql);
// $row = mysqli_fetch_array($result);
// echo mysqli_num_rows($result);
// for($i=0; $i<COUNT($num_arr); $i++) {
//     if($num_arr[$i]==$num && $option_arr[$i]==$option) {
//         echo json_encode(array('res'=>'bad'));
//         echo "<script>alert('xads');</script>";
//         echo "xdasd";
//         exit;
//     }else {
//         echo $i;
//     }
// }

// $num = $_POST['num'];
// echo $num[0];
// echo count($num);
$char = '"내목에 거는 꽃 향기" 이(가) 목표를 달성하여 배송이 시작됩니다.';
echo $char."<br>";
echo (htmlspecialchars(htmlspecialchars($char)));


?>