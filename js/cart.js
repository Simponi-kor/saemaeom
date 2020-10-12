

function del_item(ev) {
    del_item_num = ev.target.value;
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: '../cart/del_cart.php',
        data: {num:del_item_num},

        success: function (json) {
            if(json.res == 'good') {
                ev.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
                alert("삭제되었습니다");
            }else{
                alert('삭제오류.');
            }
        },
        error: function(request,status,error){
        //   console.log('failed');
        console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);

        }
    });
}

function checkbox(ev) {
    var chkbox = document.getElementsByName('check[]');
    const list = document.querySelectorAll('.cart_li');
    let Tprice = 0;
    for(i=0; i<chkbox.length; i++) {
        if(chkbox[i].checked) {
            var price = list[i].childNodes[3].childNodes[1].childNodes[3].childNodes[3].childNodes[4].childNodes[0].innerText;
            current_price = parseInt(Minus_Commas(price));
            Tprice = Tprice+current_price;
        }
    }
    document.querySelector('#Tprice').value = Tprice;
    document.querySelector('.val_td_1_price').innerText = NumberWithCommas(Tprice);
    document.querySelector('.val_td_3_Tprice').innerText = NumberWithCommas(Tprice+0);
}

function Minus_Commas(x) {
    return x.replace(/,/g, '');
}

function NumberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
