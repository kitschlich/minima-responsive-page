$(function() {

	// Smooth Scrolling

	$(function() {
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
	});

	// Animated title card for Recent Work gallery

	function toggleFigcaptions() {
		$(this).children().filter('figcaption').slideToggle(200);
	}

	$('.work-figure').on('mouseenter mouseleave', toggleFigcaptions);


	// Collapsed "accordian" type menu for screens under 480px

 	function footerCollapsed() {
    	if ($(".footer-section").css("float") == "none" ) return true;
		else return false;
	}

	function openList() {
 		if (footerCollapsed()) {
	 		$(this).next().toggle();
	 		$(this).parent().siblings().children().filter('ul').hide();
	 	}
	}

  	$('.footer-section-heading').on('click', openList);

	function showAllLists() {
		if (!footerCollapsed()) {
		 	$('.footer-section-list').show();
		}
	}

	$(window).on('resize', showAllLists);
});
