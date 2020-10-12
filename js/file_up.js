
window.onload = function() {
    setTimeout(function() {

        document.querySelector(".content1").style.display="block";
        document.querySelector(".content2").style.display="none";
        document.querySelector(".content3").style.display="none";
        document.querySelector(".content4").style.display="none";
        for(i=3; i<ma.length; i++) {
            ma[i].style.display="none";
        }
    }, 100)
    ma = document.querySelectorAll(".content_main");
    for(i=0; i<3; i++) {
        ma[i].style.display="none";
    }
    document.querySelector(".open_btn").parentNode.style.display="none";
    ma[0].style.display="block";

    
    // $('#summernote').summernote();
}

let file_input = document.querySelector("#main_img");
let option_input = document.querySelector("#option_input");
const menu1 = document.querySelector("#content1");
const menu2 = document.querySelector("#content2");
const menu3 = document.querySelector("#content3");
const menu4 = document.querySelector("#content4");
const content1main1 = document.querySelector(".content1_main1");

option_input.addEventListener("keydown", enter);
file_input.addEventListener("change", readURl);
menu1.addEventListener("click", menu_click);
menu2.addEventListener("click", menu_click);
menu3.addEventListener("click", menu_click);
menu4.addEventListener("click", menu_click);

function showhide(ev) {
    // 메뉴 세부
    show = ev.target.parentNode.parentNode.childNodes;
    open_btn = document.querySelectorAll(".open_btn");
    for(i=0; i<open_btn.length; i++) {
        open_btn[i].parentNode.style.display="block";
    }
    // console.log(show);
    ev.target.parentNode.style.display="none";
    main = document.querySelectorAll(".content_main");
    for(i=0; i<ma.length; i++) {
        main[i].style.display="none";
    }

    show[3].style.display="block";
}

function menu_click(ev) {
    //메뉴 클릭
    console.log(ev);
    menu = ev.target.id;
    document.querySelector(".content1").style.display="none";
    document.querySelector(".content2").style.display="none";
    document.querySelector(".content3").style.display="none";
    document.querySelector(".content4").style.display="none";
    document.querySelector("#menu_font1").style.color="#B7B6B6";
    document.querySelector("#menu_font2").style.color="#B7B6B6";
    document.querySelector("#menu_font3").style.color="#B7B6B6";
    document.querySelector("#menu_font4").style.color="#B7B6B6";
    menufont = ev.target.previousSibling.previousSibling;
    // console.log(menufont);
    document.querySelector("."+menu).style.display="block";
    menufont.style.color="#83dda7";

}

function readURl(input) {
    //이미지 미리보기
    preview = document.querySelector("#preview_img");
    reader = new FileReader();
    reader.addEventListener("load", function () {
        preview.src = reader.result;
        console.log(reader.result);
    }, false);

    if(file_input.files[0]) {
        console.log(reader.result);
        reader.readAsDataURL(file_input.files[0]);
    }
}

function select_category(select) {
    selected = select.value;
    if(selected == '') {
        alert('카테고리를 선택해주세요.');
    }
}

function addOption() {
    //옵션 추가
    var option_input = document.querySelector(".option_btn").previousSibling.previousSibling;
    
    table = document.querySelector("#option_table");
    col = "<td class='option_table_td'>"+option_input.value+"</td><td><button type='button' class='del_btn' onclick='itemDel(event)'>삭제</button></td>";
    tr = document.createElement('tr');
    tr.innerHTML = col;
    if(option_input.value=="") {
        alert("옵션이름을 추가해 주세요");
    }else{
        document.querySelector("#option_table tbody").appendChild(tr);
    }
    
}

function itemDel(ev) {
    //옵션 삭제
    ev.target.parentNode.parentNode.remove();
}

function enter(key) {
    //앤터기 동기화
    if (key.keyCode == 13){
        addOption();
    }
}

function optionsub() {
    //옵션 배열에 추가
    var option_hidden = document.querySelector("#option_hidden");
    var option_table_td = document.querySelectorAll(".option_table_td");
    option_hidden_arr = [];
    tbody = document.querySelector("#option_table tbody").childNodes;
    // console.log(tbody.length);
    for(var i=1; i<tbody.length; i++) {
        option_hidden_arr[i-1] = tbody[i].firstChild.innerText;
    }
    option_hidden.value = option_hidden_arr;
    console.log(option_hidden_arr);
    alert("옵션이 추가 되었습니다");
}

function email_check(ev) {
	// 이메일 형식 확인

	email_input = ev.target.value;
	email_input = email_input.replace(' ','');
	ev.target.value = email_input;

	const emailComment = document.querySelector(".war_tx");

	if(isEmail(email_input) == true) {
		emailComment.classList.remove('red');
		emailComment.classList.add('green');
		emailComment.innerText = "사용가능한 이메일 형식 입니다.";
	}else {
		emailComment.classList.remove('green');
        emailComment.classList.add('red');
        emailComment.innerText = '사용 불가능한 이메일 형식 입니다.';
	}
}

function email_submit() {
	// 이메일 인증번호 전송

	email = document.querySelector("#email_input");
	hidden_input = document.querySelector("#mail_rand");
	show_input = document.querySelector("#user_rand");
	emailComment = document.querySelector(".war_tx");
	console.log(email);
	$.ajax({
		type: 'post',
		dataType: 'json',
		url: '../mail/send_mail.php',
		data: {email: email.value},

		success: function (json) {
			if(json.res != 'bad') {
				console.log(json.res);
				rand = json.res;
				hidden_input.value = rand;
				show_input.style.display="block";
				emailComment.innerText = "";
				alert("인증 메일을 전송했습니다.");

			}else{
				alert("메일 전송에 실패했습니다.");
			}
		},
		error: function(){
			console.log('failed');
		}
	});
}

function isEmail(asValue) {
	// 이메일 정규식

	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	// var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

function fn_press(event, type) {
	if(type == "numbers") {
		if(event.keyCode<48 || event.keyCode >57)return false;
	}
}

function press_han(obj) {
	if(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) return;
	obj.value = obj.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
}

function project_title(ev) {
    title = ev.target.value;
    pre_title = document.querySelector("#project_pre_title");

    pre_title.innerText=title;
}