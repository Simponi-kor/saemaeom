const jeju_modal = document.getElementById("jeju_modal");
const close_btn = document.querySelector(".close_btn");
const main_img = document.getElementById("jeju_main_img");
const content = document.getElementById("jeju_content");
const img_num = document.getElementById("img_num");
const img_length = document.getElementById("img_length");

close_btn.addEventListener("click", modal_close);

function modal_close(ev) {
    $(jeju_modal).fadeOut();
}

function jeju_modal_show(ev) {
    const input_div = ev.target.previousSibling.previousSibling.childNodes;
    const title = ev.target.parentNode.childNodes;
    // console.log(title[5].innerText);
    
    
    img_arr = input_div[1].value;
    content_arr = input_div[3].value;
    jdate = input_div[5].value;
    // console.log(jdate)
    img = img_arr.split(";");
    content_text = content_arr.split(";");
    document.getElementById("jeju_title").innerText = title[5].innerText;
    document.getElementById("jeju_date").innerText = jdate;
    main_img.src="img/jeju/"+img[0];
    content.innerHTML=content_text[0];

    img_num.value = 0;
    img_length.value = img.length;

    $(jeju_modal).fadeIn();
}

function jeju_preview() {
    img_number = parseInt(img_num.value);
    if(img_number!=0) {
        img_number--;
    }
    img_num.value = img_number;
    main_img.src="img/jeju/"+img[img_number];
    content.innerHTML=content_text[img_number];
}

function jeju_next() {
    img_number = parseInt(img_num.value);
    length = parseInt(img_length.value);
    // console.log(length);
    if(img_number < length-1) {
        img_number++;
    } 
    img_num.value = img_number;
    // console.log(img_number);
    main_img.src="img/jeju/"+img[img_number];
    content.innerHTML=content_text[img_number];
}