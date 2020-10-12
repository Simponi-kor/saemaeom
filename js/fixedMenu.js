$(document).ready(function() {

	var jbmenu = $(".header_bottom_all").offset();
	$(window).scroll(function() {
		if($(document).scrollTop() > jbmenu.top) {
			$('.header_bottom_all').addClass("menufix");
		}else {
			$('.header_bottom_all').removeClass("menufix");
		}
	});

});