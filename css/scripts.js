$(document).ready(function(){
	$("p, h1, h2, h3, h4, img, form, button, ul, a").hide().fadeIn(3500);
	
	$("#ShowHide").click(function(){
		$(".realizacje").toggle("slow");
	});

	$(".Click1").click(function(){
		$(".ecommerce").toggle("slow");
		$(".socialmedia").fadeOut("slow");
		$(".webdesign").fadeOut("slow");
	});
	$(".Click2").click(function(){
		$(".socialmedia").toggle("slow");
		$(".ecommerce").fadeOut("slow");
		$(".webdesign").fadeOut("slow");
	});
	$(".Click3").click(function(){
		$(".webdesign").toggle("slow");
		$(".ecommerce").fadeOut("slow");
		$(".socialmedia").fadeOut("slow");
	});

	$(".ShowClick1").click(function(){
		$("#hidden1").show();
		$("#hidden2").hide();
		$("#hidden3").hide()
	});
	$(".ShowClick2").click(function(){
		$("#hidden2").show();
		$("#hidden1").hide();
		$("#hidden3").hide()
	});
	$(".ShowClick3").click(function(){
		$("#hidden3").show();
		$("#hidden1").hide();
		$("#hidden2").hide()
	});

	$('a[href="#"]').click(function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
	});

	$('button').click(function(e) {
		e.preventDefault ? e.preventDefault() : e.returnValue = false;
	});

	var btn = $('#topButton');

	$(window).scroll(function() {
	if ($(window).scrollTop() > 500) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
	});

	btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
	});
});