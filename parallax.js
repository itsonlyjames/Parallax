$(window).scroll(function() {
	var scroll = $(window).scrollTop(),
	slowScroll = scroll/1.5;
				
	$('YOUR IMAGE').css({ transform: "translateY(" + slowScroll + "px)" });
});
