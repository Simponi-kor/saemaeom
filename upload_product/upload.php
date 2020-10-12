<?php

include("../db/dbcon.php");
session_start();

$marketer=$_SESSION['name'];
$refund1=htmlentities($_POST['refund1']);
$refund2=htmlentities($_POST['refund2']);
$refund3=htmlentities($_POST['refund3']);
$refund4=htmlentities($_POST['refund4']);
$refund5=htmlentities($_POST['refund5']);
$refund6=htmlentities($_POST['refund6']);
$refund7=htmlentities($_POST['refund7']);
$refund8=htmlentities($_POST['refund8']);
$refund9=htmlentities($_POST['refund9']);
$refund10=htmlentities($_POST['refund10']);
$refund11=htmlentities($_POST['refund11']);
$refund12=htmlentities($_POST['refund12']);
$refund13=htmlentities($_POST['refund13']);
$refund14=htmlentities($_POST['refund14']);
$refund15=htmlentities($_POST['refund15']);
$refund16=htmlentities($_POST['refund16']);
$refund17=htmlentities($_POST['refund17']);
$refund18=htmlentities($_POST['refund18']);
$refund19=htmlentities($_POST['refund19']);

$product_name = htmlentities(trim($_POST['pname']));
$product_en_name = htmlentities(trim($_POST['EnName']));
$first_img = $product_en_name.".jpg";

$pcategory = $_POST['category'];
$price = htmlentities(trim($_POST['price']));
$achievement = htmlentities(trim($_POST['achievement']));
$max_achievement = htmlentities(trim($_POST['max_achievement']));
$pdate = htmlentities(trim($_POST['pdate']));
$option = $_POST['option'];

$refund = $refund1.$refund2.$refund3.$refund4.$refund5.$refund6.$refund7.$refund8.$refund9.$refund10.$refund11.$refund12.$refund13.$refund14.$refund15.$refund16.$refund17.$refund18.$refund19;
// echo $refund;

$product_origin = htmlentities(trim($_POST['origin_place']));
$product_detail = htmlentities($_POST['ir1']);
echo "detail : ".$product_detail;
// $nse_content = $mysqli->escape_string($_POST['ir1']);
// $sql = "insert into nse_tb(content)";
// $sql .= " values ('{$nse_content}')";
// $res = $mysqli->query($sql);
// echo htmlentities($nse_content);

$hidden_email = htmlentities(trim($_POST['mail_rand']));
$user_email = htmlentities(trim($_POST['user_rand']));

$bank_category = htmlentities(trim($_POST['bank_category']));
$bank = htmlentities(trim($_POST['bank']));


if(!isset($_POST['refund1'])||!isset($_POST['refund2'])||!isset($_POST['refund3'])||!isset($_POST['refund4'])||!isset($_POST['refund5'])||!isset($_POST['refund6'])||!isset($_POST['refund7'])||!isset($_POST['refund8'])||!isset($_POST['refund9'])||!isset($_POST['refund10'])||!isset($_POST['refund11'])||!isset($_POST['refund12'])||!isset($_POST['refund13'])||!isset($_POST['refund14'])||!isset($_POST['refund15'])||!isset($_POST['refund16'])||!isset($_POST['refund17'])||!isset($_POST['refund18'])||!isset($_POST['refund19'])||!isset($_POST['pname'])||!isset($_POST['EnName'])||!isset($_POST['category'])||!isset($_POST['achievement'])||!isset($_POST['max_achievement'])||!isset($_POST['pdate'])||!isset($_POST['option'])||!isset($_POST['price'])||!isset($_POST['mail_rand'])||!isset($_POST['user_rand'])||!isset($_POST['origin_place'])||!isset($_POST['ir1'])||!isset($_POST['bank_category'])||!isset($_POST['bank'])) {
    echo "<script>
		alert('값을 모두 입력해 주세요.'); 
		history.back();
	</script>";
    exit;
}

if($pcategory=='') {
    echo "<script>
		alert('카테고리를 선택해 주세요'); 
		history.back();
	</script>";
	exit;
}

if($bank_category=='') {
    echo "<script>
		alert('은행을 선택해 주세요'); 
		history.back();
	</script>";
	exit;
}

if(strpos($bank, '-') !== false) {  
    echo "<script>
		alert('계좌번호는 -를 빼고 입력해 주세요.'); 
		history.back();
	</script>";
	exit;
}

if($achievement > $max_achievement) {
    echo "<script>
		alert('최대 목표 인원수는 최소 인원수보다 많거나 같게 설정해 주세요.'); 
		history.back();
	</script>";
	exit;
}

if($user_email != $hidden_email) {
	echo "<script>
		alert('이메일 인증번호가 같지 않습니다.'); 
		history.back();
	</script>";
	exit;
}

if($option == '') {
    $option = "기본";
}

// if(isset($_FILES['first'])) {
//     echo "ise";
// }else {
//     echo "no file";
// }


if(isset($_FILES['first']) && $_FILES['first']['name'] != "") {

    $file = $_FILES['first'];
    $upload_directory = '../img/product/';
    $ext_str = "jpg";
    $allowed_extensions = explode(',', $ext_str);
    $max_file_size = 5242880;
    $ext = substr($file['name'], strrpos($file['name'], '.') + 1);

    // 확장자 체크
    if(!in_array($ext, $allowed_extensions)) {
        echo "업로드할 수 없는 확장자 입니다.";
    }

    // 파일 크기 체크
    if($file['size'] >= $max_file_size) {
        echo "5MB 까지만 업로드 가능합니다.";
    }

    $path = md5(microtime()) . '.' . $ext;
    $tmp_end = explode(".", $file["name"]);
    $newfilename  = $product_en_name.".jpg";
    // echo $newfilename;
    if(move_uploaded_file($file['tmp_name'], $upload_directory.$newfilename)) {

        // $query = "INSERT INTO upload_file (file_id, name_orig, name_save, reg_time) VALUES(?,?,?,now())";
        // $file_id = md5(uniqid(rand(), true));
        // $name_orig = $file['name'];
        // $name_save = $path;

        // $stmt = mysqli_prepare($db_conn, $query);
        // $bind = mysqli_stmt_bind_param($stmt, "sss", $file_id, $name_orig, $name_save);
        // $exec = mysqli_stmt_execute($stmt);
        // mysqli_stmt_close($stmt);

    }else {
        echo "<script>
            alert('파일이 업로드 되지 않았습니다.'); 
            history.back();
        </script>";
        exit;
    }

}

$sql = "INSERT INTO product(pname, enpname, price, marketer, pcategory, achievement, max_achievement, refund, pdate, product_option, first_img, content_img, product_origin, bank_category, bank) VALUES('$product_name', '$product_en_name', '$price', '$marketer', '$pcategory', $achievement, $max_achievement, '$refund', '$pdate', '$option', '$first_img', '$product_detail', '$product_origin', '$bank_category', '$bank')";
if($mysqli->query($sql)) {
    echo "<script>
            alert('상품이 업로드 되었습니다. 관리자의 승인을 기다려 주십시오'); 
            location.href='../index.html';
        </script>";
}else {
    echo "<script>
            alert('업로드에 실패 했습니다.'); 
            history.back();
        </script>";
        exit;
    echo $sql;
}


?>

