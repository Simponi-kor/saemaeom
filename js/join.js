function fn_press(event, type) {
	if(type == "numbers") {
		if(event.keyCode<48 || event.keyCode >57)return false;
	}
}

function press_han(obj) {
	if(event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46) return;
	obj.value = obj.value.replace(/[\ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
}

function isEmail(asValue) {
	// 이메일 정규식

	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	// var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
}

function pwchk(ev) {
	// 비밀번호 유효성

	var self_pw = ev.target.value;
	self_pw = self_pw.replace(' ','');
    ev.target.value = self_pw;
    var war_ps = document.querySelector('.war_ps');
    if(8<=self_pw.length && self_pw.length <= 20 && self_pw.search(/[0-9]/g) >= 0) {
		
		war_ps.classList.remove('red');
		war_ps.classList.add('green');
		war_ps.innerText = '사용가능한 비밀번호 입니다.';
			
	}else {
		war_ps.classList.add('red');
		war_ps.classList.remove('green');
		war_ps.innerText = '비밀번호는 영문+숫자 8~20자 이내로 작성하여 주십시오.';
	}
}

function pw_checke(ev) {
	// 비밀번호 확인

	var self_pw = ev.target.value;
	self_pw = self_pw.replace(' ','');
    ev.target.value = self_pw;
	const pw = document.querySelector(".ps").value;
	const war_ps_check = document.querySelector('.war_ps_check');
	console.log(pw);
	console.log(self_pw);
	if(pw == self_pw) {
		war_ps_check.classList.remove('red');
		war_ps_check.classList.add('green');
		war_ps_check.innerText = ('동일한 비밀번호 입니다.');
			
	}else {
		war_ps_check.classList.add('red');
		war_ps_check.classList.remove('green');
		war_ps_check.innerText = ('비밀번호가 같지 않습니다.');
	}
}

function id_check(ev) {
	//아이디 중복 확인

	id = ev.target.value;
	id = id.replace(' ','');
    ev.target.value = id;
	const idComment = document.querySelector("#id_war");
	if(id.length > 4) {
		$.ajax({
            type: 'post',
            dataType: 'json',
            url: '../join/idCheck.php',
            data: {id: id},

            success: function (json) {
                if(json.res == 'good') {
                    console.log(json.res);
					idComment.classList.remove('red');
					idComment.classList.add('green');
					idComment.innerText = "사용 가능한 아이디 입니다.";
                }else{
					idComment.classList.remove('green');
                	idComment.classList.add('red');
                    idComment.innerText = '이미 사용 중인 아이디 입니다. 다른 아이디를 입력해 주세요.';
                }
            },
            error: function(){
              console.log('failed');
            }
        });
	}else {
		idComment.classList.remove('green');
        idComment.classList.add('red');
        idComment.innerText = '5글자 이상의 아이디를 입력해 주세요.';
	}
	
}

function email_check(ev) {
	// 이메일 형식 확인

	email_input = ev.target.value;
	email_input = email_input.replace(' ','');
	ev.target.value = email_input;

	const emailComment = document.querySelector(".ewar_text .war_tx");

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
	emailComment = document.querySelector(".ewar_text .war_tx");
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

function address_search() {
	//주소
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    // document.getElementById("sample6_extraAddress").value = extraAddr;
                
                } else {
                    // document.getElementById("sample6_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample6_postcode').value = data.zonecode;
                document.getElementById("sample6_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample6_detailAddress").focus();
            }
        }).open();
    }


