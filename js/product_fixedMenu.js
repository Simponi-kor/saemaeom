$(document).ready(function() {

	var phmenu = $(".fixed_menu").offset();
	$(window).scroll(function() {
		if($(document).scrollTop() > phmenu.top) {
			$('.fixed_menu').addClass("fixed");
			$('.content_funding').addClass("top_content");
			$('.content_QA').addClass("top_content");
			$('.content_review').addClass("top_content");
		}else {
			$('.fixed_menu').removeClass("fixed");
			$('.content_funding').removeClass("top_content");
			$('.content_QA').removeClass("top_content");
			$('.content_review').removeClass("top_content");
		}
	});

	var prmenu = $(".product_menu").offset();
	$(window).scroll(function() {
		if($(document).scrollTop() > prmenu.top) {
			$('.product_menu').addClass("fixed");
		}else {
			$('.product_menu').removeClass("fixed");
		}
	});

});