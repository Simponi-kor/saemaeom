$("#check_all").click(function() {
	if ($("#check_all").is(":checked")) {
		$(".check").prop("checked", true);
	}else {
		$(".check").prop("checked", false);
	}
});

$(".check").click(function(event) {
	if($("input[name='check']:checked").length == 3) {
		$("#check_all").prop("checked", true);
	}else {
		$("#check_all").prop("checked", false);
	}
});