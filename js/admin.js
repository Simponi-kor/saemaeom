window.onload = function() {

    menu_detail = document.querySelectorAll(".menu_detail");
    for(i=0; i<menu_detail.length; i++) {
        menu_detail[i].style.display="none";
    }
    menu_detail[0].style.display="";
    
    // 메뉴 클릭
    menu = document.querySelectorAll(".menu_li");
    for(i=0; i<menu.length; i++) {
        menu[i].addEventListener("click", menu_click);
    }

    // 실시간 사용자 검색
    document.querySelector("#keyword").addEventListener("keyup", user_search);                // 검색창
    document.querySelector("#grade").addEventListener("change", user_search);                // 셀렉트 박스
    search_radio = document.querySelectorAll("input[name='search_option']");    // 라디오 버튼
    for(i=0; i<search_radio.length; i++) {
        search_radio[i].addEventListener("change", user_search);
    }

    // 사용자 삭제 버튼
    member_del_btn = document.querySelectorAll(".member_del_btn");
    for(i=0; i<member_del_btn.length; i++) {
        member_del_btn[i].addEventListener("click", member_del);
    }

    // 사용자 변경(등급 변경) 버튼
    member_modify_btn = document.querySelectorAll(".member_modify_btn");
    for(i=0; i<member_modify_btn.length; i++) {
        member_modify_btn[i].addEventListener("click", member_modify);
    }

    // 사용자 메시지 버튼(모달 열기)
    member_message_btn = document.querySelectorAll(".fa-envelope");
    for(i=0; i<member_message_btn.length; i++) {
        member_message_btn[i].addEventListener("click", message_modal);
    }
   
    
    // 상세보기 버튼
    product_detail_btn = document.querySelectorAll(".product_detail_btn");
    for(i=0; i<product_detail_btn.length; i++) {
        product_detail_btn[i].addEventListener("click", product_detail);
    }
    
    
    // 모달 닫기 버튼
    close_btn = document.querySelectorAll(".modal_close");
    for(i=0; i<close_btn.length; i++) {
        close_btn[i].addEventListener("click", modal_close);
    }

    // 승인 버튼
    accept_btn = document.querySelector("#product_accept");
    accept_btn.addEventListener("click", accept);


}

function message_modal(ev) {
    // 메시지 모달 열기

    user_id_hidden = document.querySelector("#user_id_hidden");
    user_id = ev.target.parentNode.value;

    user_id_hidden.value = user_id;
    document.querySelector("#message_modal").style.display = "block";
}

function accept(ev) {
    // 상품 허가

    number = ev.path[1].value;
    tr = ev.target.parentNode.parentNode.parentNode;
    if(confirm("정말 승인 하시겠습니까?")) {
        // console.log(number);
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '../admin/product_accept.php',
            data: {number: number},
    
            success: function (json) {
                if(json.res == 'good') {
                    // console.log(json.res);
                    alert("승인 되었습니다");
                    tr.remove();
                }else{
                    console.log("fali");
                }
            },
            error: function(request,status,error){
                alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
               }
        });
    }
    // console.log(ev.path[1].value);
}

function product_detail(ev) {
    // 상품 상세 모달

    content_arr = ev.path[1].value;
    // console.log(ev.path[1].value);
    // console.log(content_arr);
    content = content_arr.split("|");
    content_detail = escapeHtml(content[0]);
    modal = document.querySelector("#modal .modal_content");
    modal.children[0].children[0].innerText=content[1];
    modal.children[1].innerHTML=content_detail;
    $("#modal").fadeIn();

    // console.log(modal.children[0].children[0]);
    // console.log(content[1]);
}

function modal_close(ev) {
    // 모달 닫기

    $("#modal").fadeOut();
    $("#message_modal").fadeOut();
}

function escapeHtml(text) {
    return text
        .replace(/"&amp;"/g, "&")
        .replace(/"&lt;"/g, "<")
        .replace(/"&gt;"/g, ">")
        .replace(/"&quot;"/g, '"')
        .replace(/"&#039;"/g, "'");
  }

function menu_click() {
    // 메뉴 클릭

    li = this;
    li_num = this.value;
    // console.log(li);
    // console.log(this.value);
    menu_detail = document.querySelectorAll(".menu_detail");
    for(i=0; i<menu_detail.length; i++) {
        menu_detail[i].style.display="none";
    }
    menu_detail[li_num].style.display="";

    menu = document.querySelectorAll(".menu_li");
    for(i=0; i<menu.length; i++) {
        menu[i].classList.remove("active");
    }
    this.classList.add("active");
    
    // 안쪽 메뉴 이름 변경
    document.querySelector(".main_bot_right_top").children[0].innerText=this.innerText;
}

function member_modify() {
    // 사용자 등급 변경

    number = this.value;
    selected = this.parentNode.parentNode.children[7].children[0];
    if(confirm("정말 변경 하시겠습니까?")) {
        // console.log(number);
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '../admin/member_modify.php',
            data: {number: number, selected: selected.value},
    
            success: function (json) {
                if(json.res == 'good') {
                    // console.log(json.res);
                    alert("변경 되었습니다");
                }else{
                    console.log("fali");
                }
            },
            error: function(request,status,error){
                alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
               }
        });
    }
}

function member_del() {
    // 사용자 삭제

    number = this.value;
    tr = this.parentNode.parentNode;
    if(confirm("정말 탈퇴시키시겠습니까?")) {
        // console.log(number);
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: '../admin/member_del.php',
            data: {number: number},
    
            success: function (json) {
                if(json.res == 'good') {
                    // console.log(json.res);
                    alert("탈퇴 되었습니다");
                    tr.remove();
                }else{
                    console.log("fali");
                }
            },
            error: function(request,status,error){
                alert("code = "+ request.status + " message = " + request.responseText + " error = " + error); // 실패 시 처리
               }
        });
    }
    
}

function user_search() {
    // 실시간 사용자 검색

    keyword = document.querySelector("#keyword").value;
        // table_tr = document.querySelectorAll("#member_table>tbody>tr");
        // for(i=0; i<table_tr.length; i++) {
        //     table_tr[i].style.display="none";
        // }
        $("#member_table>tbody>tr").hide();

        search_grade = document.querySelector("#grade").value;
        search_option = document.querySelector('input[name="search_option"]:checked').value;

        // console.log(keyword);
        // console.log(search_grade);
        // console.log(search_option);

        if(search_option == "email") {
            search_td = $("#member_table>tbody>tr>td:nth-child(4):contains('"+keyword+"')");
        } else if(search_option == "name") {
            search_td = $("#member_table>tbody>tr>td:nth-child(3):contains('"+keyword+"')");
        }else {
            search_td = $("#member_table>tbody>tr>td:nth-child(2):contains('"+keyword+"')");
        }
        // search = document.querySelectorAll("#member_table>tbody>tr");
        // for(i=0; i<table_tr.length; i++) {
        //     if(search_option == "email") {
        //         search_text = search[i].children[3].innerText;
        //     }else if(search_option == "name") {
        //         search_text = search[i].children[2].innerText;
        //     }else {
        //         search_text = search[i].children[1].innerText;
        //     }
        //     if(search_text.indexOf(keyword) != -1) {
        //         search[i].display="block";
        //         console.log(search[i]);
        //     }else {
        //         console.log("fal");
        //     }
        // }
        $(search_td).parent().show();

        
        if(search_grade == "normal") {
            hide_td = $("#member_table>tbody>tr>td:nth-child(8):contains('판매자')");
        }else{
            hide_td = $("#member_table>tbody>tr>td:nth-child(8):contains('일반 회원')");
        }
        if(search_grade != "all") {
            $(hide_td).parent().hide();
        }
}