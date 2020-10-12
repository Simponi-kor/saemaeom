
window.onload = function() {
	setTimeout(slideShow, 4000);
}

function slideShow() {
	index = 1;
	// 라디오 개수 세기
	checkRadio = document.getElementsByName("pos");
	
	// index = 번호 가져와서 넣기

	for(var i=0; i<checkRadio.length; i++) {
		if(checkRadio[i].checked == true){
			index = i+1;
			if(index>=3) {
				index=0;
			}
		}
	}

	index++;
	$("#pos"+index).prop("checked", true);
	
	setTimeout(slideShow, 4000);
}

function nextlist(ev) {
	// 다음 상품 리스트

	listT = ev.target.parentNode.parentNode.parentNode.parentNode.childNodes;
	list = listT[3].childNodes;
	listul = list[1];
	
	// console.log(listul);
	listlicount = (listul.childNodes.length-1)/2;
	// console.log(listlicount);
	maxcount = Math.ceil(listlicount/5);
	// console.log(maxcount);
	currentmarginleft = listul.style.marginLeft;
	// console.log(currentmarginleft);
	if(listul.style.marginLeft=='') {
		count=-1;
	}else {
		count = parseInt(currentmarginleft.substr(0, currentmarginleft.length-3)-1);
	}
	// console.log(count);
	if(-maxcount!=count) {
		listul.style.marginLeft=count*100+'%';
	}
}

function previewlist(ev) {
	// 이전 상품 리스트

	listT = ev.target.parentNode.parentNode.parentNode.parentNode.childNodes;
	list = listT[3].childNodes;
	listul = list[1];
	
	// console.log(listul);
	listlicount = (listul.childNodes.length-1)/2;
	// console.log(listlicount);
	maxcount = Math.ceil(listlicount/5);
	// console.log(maxcount);
	currentmarginleft = listul.style.marginLeft;
	// console.log(currentmarginleft);
	if(listul.style.marginLeft=='') {
		count=0;
	}else {
		count = parseInt(currentmarginleft.substr(0, currentmarginleft.length-3))+1;
	}

	if(maxcount!=count) {
		listul.style.marginLeft=count*100+'%';
	}
}

function jeju_nextlist(ev) {
	// 다음 상품 리스트

	listT = ev.target.parentNode.parentNode.parentNode.parentNode.childNodes;
	list = listT[3].childNodes;
	listul = list[1];
	
	// console.log(listul);
	listlicount = (listul.childNodes.length-1)/2;
	// console.log(listlicount);
	maxcount = Math.ceil(listlicount/3);
	// console.log(maxcount);
	currentmarginleft = listul.style.marginLeft;
	// console.log(currentmarginleft);
	if(listul.style.marginLeft=='') {
		count=-1;
	}else {
		count = parseInt(currentmarginleft.substr(0, currentmarginleft.length-3)-1);
	}
	// console.log(count);
	if(-maxcount!=count) {
		listul.style.marginLeft=count*100+'%';
	}
}

function jeju_previewlist(ev) {
	// 이전 상품 리스트

	listT = ev.target.parentNode.parentNode.parentNode.parentNode.childNodes;
	list = listT[3].childNodes;
	listul = list[1];
	
	// console.log(listul);
	listlicount = (listul.childNodes.length-1)/2;
	// console.log(listlicount);
	maxcount = Math.ceil(listlicount/5);
	// console.log(maxcount);
	currentmarginleft = listul.style.marginLeft;
	// console.log(currentmarginleft);
	if(listul.style.marginLeft=='') {
		count=0;
	}else {
		count = parseInt(currentmarginleft.substr(0, currentmarginleft.length-3))+1;
	}

	if(maxcount!=count) {
		listul.style.marginLeft=count*100+'%';
	}
}