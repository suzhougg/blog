(function ($) {
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	var dropToggle = $('.menu_right > li').has('ul').children('a');
	dropToggle.on('click', function () {
		dropToggle.not(this).closest('li').find('ul').slideUp(200);
		$(this).closest('li').children('ul').slideToggle(200);
		return false;
	});

	$('.toggle_icon').on('click', function () {
		$('body').toggleClass('open');
	});

	$('.side_menu .list.menu_right').mCustomScrollbar({
		theme: 'dark'
	});

	/*----------------------------------------------------*/
	/*  Magnific Pop up js
	/*----------------------------------------------------*/

	// for img popup //
	$('.package-area').magnificPopup({
		delegate: '.img-popup',
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.play-video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	/*----------------------------------------------------*/
	/*  Home Slider js
	/*----------------------------------------------------*/
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 5000
		},
		speed: 2000,
		loop: true
	});

	/*----------------------------------------------------*/
	/*  Portfolio carousel js
	/*----------------------------------------------------*/

	$('.active-gallery-carousel').owlCarousel({
		items: 2,
		// autoplay: 2500,
		loop: true,
		margin: 30,
		nav: true,
		navText: ["<img src='img/cprev.png'>", "<img src='img/cnext.png'>"],
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			420: {
				items: 1
			},
			575: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			},
			1680: {
				items: 2
			}
		}
	});

	/*-------------------------------------------------------------------------------
	Testimonial Slider 
	-------------------------------------------------------------------------------*/
	$('.active_testimonial').owlCarousel({
		items: 1,
		loop: true,
		dots: false,
		autoplay: false,
		nav: true,
		navText: ["<img src='img/cprev.png'>", "<img src='img/cnext.png'>"]
	});

	/*----------------------------------------------------*/
	/*  Nice Select
	/*----------------------------------------------------*/

	$('#datepicker').datepicker({
		showOn: 'button',
		buttonImage: 'img/calendar.png',
		buttonImageOnly: true
	});

	$('#datepicker1').datepicker({
		showOn: 'button',
		buttonImage: 'img/calendar.png',
		buttonImageOnly: true
	});

})(jQuery);

$(document).ready(function () {
	$("#service, #project").on("click", function (event) {
		event.preventDefault();
	});
	// 表单验证内容
	$("#footerSent").on("click", function (event) {
		event.preventDefault();

		var inputValue = $("#infoInput").val().trim();

		if (inputValue === "") {
			$(".info").text("请输入消息");
			$(".info").css("color", "red");
			return;
		} else {
			var msg = new showmsgbox();
			var loading = msg.show("正在发送，请稍后...", "loading");
			setTimeout(function () {
				msg.close(loading);
				var suc = msg.show("发送成功！", "right");
			}, 1000);
			msg.close(suc);
		}
	});
	// 表单验证内容
	$("#inlineFormButton").on("click", function (event) {
		event.preventDefault();

		var inputValue = $("#inlineFormInputGroup").val().trim();

		if (inputValue === "") {
			$(".info").text("请输入消息");
			$(".info").css("color", "red");
			return;
		} else {
			var msg = new showmsgbox();
			var loading = msg.show("正在发送，请稍后...", "loading");
			setTimeout(function () {
				msg.close(loading);
				var suc = msg.show("发送成功！", "right");
			}, 1000);
			msg.close(suc);
		}
	});
	// 表单验证内容
	$("#subButton").on("click", function (event) {
		event.preventDefault();

		var emailInputValue = $("#subInfoInput").val().trim();
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(emailInputValue)) {
			$(".subInfo").text("请输入有效的邮箱地址");
			$(".subInfo").css("color", "red");
			return;
		} else {
			// $(".subInfo").text("提交中...");
			// $(".subInfo").css("color", "rgb(97, 175, 239)");
			var msg = new showmsgbox();
			var loading = msg.show("正在发送，请稍后...", "loading");
			setTimeout(function () {
				msg.close(loading);
				var suc = msg.show("发送成功！", "right");
			}, 1000);
			msg.close(suc);
		}
	});

	// 点击按钮后滑动到指定部分
	$("#searchMore").click(function () {
		$("html, body").animate({
			scrollTop: $(".amenities-area").offset().top
		}, 1000); // 滑动时间为1秒
	});
});

$(document).ready(function () {
	// 当输入控件失去焦点时验证
	$("#comment-name").on("blur", function () {
		if ($(this).val() === '' || $(this).val().length < 3) {
			$("#error-name").css("visibility", "visible");
		} else {
			$("#error-name").css("visibility", "hidden");
		}
	});
	$("#comment-email").on("blur", function () {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		if (!emailPattern.test($(this).val())) {
			$("#error-email").css("visibility", "visible");
		} else {
			$("#error-email").css("visibility", "hidden");
		}
	});
	$("#comment-message").on("blur", function () {
		if ($(this).val().length < 6) {
			$("#error-message").css("visibility", "visible");
		} else {
			$("#error-message").css("visibility", "hidden");
		}
	});

	$("#submitBtn").click(function (event) {
		event.preventDefault();
		var name = $("#comment-name").val();
		var email = $("#comment-email").val();
		var message = $("#comment-message").val();
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		if (name === '' || name.length < 3) {
			$("#error-name").css("visibility", "visible");
			return;
		}
		if (!emailPattern.test(email)) {
			$("#error-email").css("visibility", "visible");
			return;
		}
		if (message.length < 6) {
			$("#error-message").css("visibility", "visible");
			return;
		}

		var newComment = `
		<div class="comment-list">
			<div class="single-comment justify-content-between d-flex">
				<div class="user justify-content-between d-flex">
					<div class="thumb">
						<img src="img/个人简介/默认.jpeg" alt="" />
					</div>
					<div class="desc">
						<h5><a href="#">${name}</a></h5>
						<p class="date">${new Date().toLocaleString()}</p>
						<p class="comment">${message}</p>
					</div>
				</div>
				<div class="reply-btn">
					<a href="" class="btn-reply text-uppercase">回复</a>
				</div>
			</div>
		</div>
		`;

		$(".comments-area").append(newComment);
		$("#comment-name,#comment-email,#comment-message").val('');
	});
});

