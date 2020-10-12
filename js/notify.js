const notify_del_btn = document.querySelectorAll(".notify_del_btn");

for(i=0; i<notify_del_btn.length; i++){
    notify_del_btn[i].addEventListener("click", notify_del);
}

function notify_del(ev) {
    const number = ev.target.value,
    del_li =ev.target.parentNode.parentNode;

    if(confirm("정말 삭제 하시겠습니까?")) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: '../mypage/notify_del_action.php',
            data: {number: number},
            success: function (json) {
                if(json.res == 'good') {
                    // console.log(json.res);
                    del_li.remove();
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