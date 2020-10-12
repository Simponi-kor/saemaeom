<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>네이버 스마트 에디터 적용하기</title>
<style>
.nse_content{
    width:660px;
    height:500px;
    }
</style>
<script type="text/javascript" src="./nse_files/js/HuskyEZCreator.js" charset="utf-8"></script>

</head>
<body>
<form name="nse" action="add_db_nse.php" method="post">
<textarea name="ir1" id="ir1" class="nse_content" ></textarea>
<script type="text/javascript">
var oEditors = [];
nhn.husky.EZCreator.createInIFrame({
oAppRef: oEditors,
elPlaceHolder: "ir1",
sSkinURI: "./nse_files/SmartEditor2Skin.html",
fCreator: "createSEditor2"
});
function submitContents(elClickedObj) {
oEditors.getById["ir1"].exec("UPDATE_CONTENTS_FIELD", []);	// 에디터의 내용이 textarea에 적용됩니다. 
// 에디터의 내용에 대한 값 검증은 이곳에서 document.getElementById("ir1").value를 이용해서 처리하면 됩니다.

try {
elClickedObj.form.submit();
} catch(e) {}
}
</script>
<input type="submit" value="전송"  onclick="submitContents(this)" />
</form>
</body>
</html>