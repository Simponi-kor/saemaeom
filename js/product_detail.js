window.onload = function() {
    const add_cart_btn = document.getElementById('shopping_btn');

    // add_cart_btn.addEventListener('click', add_cart);
}

var IMP = window.IMP; // 생략가능
IMP.init('imp66833893'); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용

var Bemail = document.getElementById('Uemail');
var Bname = document.getElementById('Uname');
var Btel = document.getElementById('Uphone');
var Baddress = document.getElementById('Uaddress');
var Bpname = document.getElementById('Upname');


function del_commas(x) {
    return x.replace(/,/g, "");
}

function purchase_btn(ev) {
    var Bemail = document.getElementById('Uemail');
    var Bname = document.getElementById('Uname');
    var Btel = document.getElementById('Uphone');
    var Baddress = document.getElementById('Uaddress');
    var Bpname = document.getElementById('Upname');
    var Bprice = document.getElementById('Uprice');
    var msg;
    var totalPrice = del_commas(Bprice.value);
    // console.log(Bpname);
    var menu = ev.target.parentNode.parentNode.childNodes;
    var option = menu[7];
    if(option.value == "") {
        alert("옵션을 선택해 주세요");
    }else{
        IMP.request_pay({
            pg: 'inicis', // version 1.1.0부터 지원.
            pay_method: 'card',
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: Bpname.value,
            amount: totalPrice, //판매 가격
            buyer_email: Bemail.value,
            buyer_name: Bname.value,
            buyer_tel: Btel.value,
            buyer_addr: Baddress.value,
            buyer_postcode: '123-456'
        }, function (rsp) {
            if (rsp.success) {
                var msg = '결제가 완료되었습니다.';
                msg += '고유ID : ' + rsp.imp_uid;
                msg += '상점 거래ID : ' + rsp.merchant_uid;
                msg += '결제 금액 : ' + rsp.paid_amount;
                msg += '카드 승인번호 : ' + rsp.apply_num;
            } else {
                var msg = '결제에 실패하였습니다.';
                msg += '에러내용 : ' + rsp.error_msg;
            }
            alert(msg);
        });
    }
}

function add_cart(ev) {
    var menu = ev.target.parentNode.parentNode.childNodes;
    var num = ev.target.value;
    console.log(menu);
    var option = menu[7];
    if(option.value == "") {
        alert("옵션을 선택해 주세요");
    }else {
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '../product_detail/add_cart.php',
            data: {num:num, option:option.value},

            success: function (json) {
                if(json.res == 'good') {
                    console.log(json.res);
                    alert("장바구니에 추가되었습니다.");
                }else{
                    alert('이미 장바구니에 추가된 상품입니다.');
                }
            },
            error: function(request,status,error){
            //   console.log('failed');
            console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);

            }
        });
    }
}

function content_li(num) {
    menu_li = document.querySelectorAll('.pro_detail_li');
    for(i=0; i<4; i++) {
        menu_li[i].classList.remove('current_menu');
    }
    menu_li[num].classList.add('current_menu');
    con_num = num+1;
    for(i=1; i<5; i++) {
        document.querySelector('.pro_content'+i).style.display="none";
    }
    // console.log('.pro_content'+con_num);
    document.querySelector('.pro_content'+con_num).style.display="block";
}

function addClass(element, className) {
    element.className += " " + className;
}

function removeClass(element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)"); element.className = element.className.replace(check, " ").trim();
}
