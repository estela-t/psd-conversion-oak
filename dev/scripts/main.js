
var oakJs = {};

oakJs.init = function() {
	oakJs.masonry();
	oakJs.events();
};

oakJs.events = function() {
	oakJs.masonryEvents();
	oakJs.likesCounter();
	oakJs.smoothScroll();
	// reveal skill items on scroll
	window.sr = ScrollReveal();
	sr.reveal('.skills_item', { duration: 2000 }, 500);
};

// counter for portfolio likes 
oakJs.likesCounter = function() {
	$(".fa-heart-o").on("click", function(){
		$(this).css("color", "red");
		$(this).siblings().html(function(i, val) {
			return +val+1;
		});
	});
};

// smooth scroll on anchor tags
oakJs.smoothScroll = function(){
	$('a[href*="#"]:not([href="#"])').click(function() {
	  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    if (target.length) {
	      $('html, body').animate({
	        scrollTop: target.offset().top
	      }, 1000);
	      return false;
	    }
	  }
	});
};


oakJs.masonry = function() {
	// initiate Isotope
	var createGrid = function() {
		var $grid = $('.gallery').isotope({
			itemSelector: '.gallery_item',
			layoutMode: 'fitRows'
		});
	};
};

oakJs.masonryEvents = function() {
	$('.nav_portfolio').on('click', 'li', function(){
		var selector = $(this).attr('data-filter');
		$('.nav_portfolio li').removeClass('active');
		$grid.isotope({
			filter: selector
		});
	});
	$('.nav_portfolio').each(function(i,buttons){
		var $buttons = $(buttons);
		$buttons.on('click', 'li', function(){
			$buttons.find('.active').removeClass('active');
			$(this).addClass('active');
		});
	});
};



	//			 $(this).toggleClass('active');

	// });
	// return false;





$(function(){
	oakJs.init();
});