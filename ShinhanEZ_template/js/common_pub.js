$(function(){

	//include file
	/*$('#header').load('../include/header.html');
	$('#subHeader').load('../include/sub-header.html');
	$('#sitemap').load('../include/sitemap.html');
	$('#footer').load('../include/footer.html'); */


	//header fixed
	$(window).scroll(function() {
		if ($(window).scrollTop() > 113) {
			$('.header').addClass('fixed');
		} else {
			$('.header').removeClass('fixed');
		}
	});


	// main visual text animation
	$.exists = function(selector) {
		return ($(selector).length > 0);
	}

	function splittingTextDelay (object, speed, delay_speed) {
		var splitLength = $(object).find(".char").length;
		for (var i=0; i<splitLength; i++) {
			if (  $(object).data("css-property") == "animation" ) {
				$(object).find(".char").eq(i).css("animation-delay",delay_speed+(i*speed)+"s");
			}else if( $(object).data("css-property") == "transition" ) {
				$(object).find(".char").eq(i).css("transition-delay",delay_speed+(i*speed)+"s");
			}
		}
	}

	if ($.exists('.word-split-JS')) {
		Splitting();
		var $splittingTxt = $('.word-split-JS');
		$($splittingTxt).each(function  () {
			splittingTextDelay($(this),$(this).data('speed'),$(this).data('speed-delay'));
		});
	}


	/* btn-page-top */
	$('#btn-page-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 200);
		$('.logo a', '.header').focus();
	});

	$(window).scroll(function() {
		if($(this).scrollTop() > 300) {
			$('#btn-page-top').addClass('active');
		}
		else {
			$('#btn-page-top').removeClass('active');
		}
	});

});


//sitemap
function icoBtnAppMenu() {
	$("#sitemap").show();
	$("#wrap").hide();
}

function icoBtnClose() {
	$("#wrap").show();
	$("#sitemap").hide();
}

/* 복사 방지 */
document.addEventListener('DOMContentLoaded', function() {
	function preventAction(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	['contextmenu', 'copy', 'cut', 'selectstart', 'dragstart'].forEach(event => document.addEventListener(event, preventAction));

	document.addEventListener('keydown', function(e) {
		if (e.ctrlKey && (e.key === 'C' || e.key === 'c')) {
			preventAction(e);
			return;
		}
	});

	let touchStartTime = 0;
	function handleTouchStart(e) {
		touchStartTime = new Date().getTime();
	}
	function handleTouchEnd(e) {
		if (new Date().getTime() - touchStartTime > 500) {
			preventAction(e);
		}
	}
	document.addEventListener('touchstart', handleTouchStart);
	document.addEventListener('touchend', handleTouchEnd);
});