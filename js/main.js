// header Fixed JS Start
$(window).scroll(function() {
	var sticky = $('.header__main'),
	scroll = $(window).scrollTop();
	   
	if (scroll >= 80) { 
		sticky.addClass('fixed'); 
	}
	else { 
		sticky.removeClass('fixed');
	}
});
// header Fixed JS End

// SVG file to SVG code convert JS Start
function img2svg() {
  jQuery('.in-svg').each(function(i, e) {
      var $img = jQuery(e);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      jQuery.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');
          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', ' ' + imgClass + ' replaced-svg');
          }
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');
          // Replace image with new SVG
          $img.replaceWith($svg);
      }, 'xml');
  });
}
img2svg();
// SVG file to SVG code convert JS End

// Mobile Menu Start
$(".mobile_menu").click(function(){
	$(".header__menu, .mobile_menu").toggleClass("open");
});
// Mobile Menu End

// Header Full Menu JS
$(".header__menu--icon, .header__full--close").click(function(){
	$(".header__full--menu").toggleClass("open");
});
// Header Full Menu JS

// Case Study JS
$(".view__case").click(function(){
	$(this).toggleClass("show");
	$(".category__projects-block").slideToggle();
});
// Case Study JS

// Bottom to Top Arrow JS Start
var back_to_top = $('.bottom__to__top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    back_to_top.addClass('show');
  } else {
    back_to_top.removeClass('show');
  }
});

back_to_top.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
// Bottom to Top Arrow JS End

// Hero Slider
var swiper = new Swiper(".hero__slider", {
	loop: true,
	effect: "fade",
	slidesPerView: 1
 });
// Hero Slider

// Portfolio Gallery Slider
var swiper = new Swiper(".portfolio__gallery", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	breakpoints: {
	  0: {
	  	spaceBetween: 15,
		slidesPerView: 1.5,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
			clickable: true
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}
	  },
	  768: {
		slidesPerView: 2
	  },
	  1024: {
		slidesPerView: 3
	  },
	},
  });
// Portfolio Gallery Slider

// Our Work Slider
var ourWork = new Swiper(".our__work__slider", {
	effect: "fade",
	navigation: {
	  nextEl: ".swiper-button-next.our__work-arrow",
	  prevEl: ".swiper-button-prev.our__work-arrow",
	},
});
// Our Work Slider

// Inner Banner Slider
var Aboutslider = new Swiper(".inner__banner__slider", {
	loop: true,
	effect: "fade",
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	effect: "creative",
	creativeEffect: {
		prev: {
		shadow: true,
		translate: ["-20%", 0, -1],
		},
		next: {
		translate: ["100%", 0, 0],
		},
	},
});
// Inner Banner Slider

// Our Office Slider
var officeslider = new Swiper(".our_office__slider", {
	loop: true,
	effect: "fade",
	pagination: {
		el: ".swiper-pagination.office-pagination",
		type: "progressbar",
		clickable: true
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	effect: "creative",
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ["-20%", 0, -1],
		},
		next: {
			translate: ["100%", 0, 0],
		},
	},
});
// Our Office Slider

// Our Stats Slider
var Statsslider = new Swiper(".stats__slider", {
	loop: true,
	effect: "fade"
});
// Our Stats Slider

// Blog Slider
var swiper = new Swiper(".blog__slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
	  0: {
			slidesPerView: 1.2
	  },
	  768: {
			slidesPerView: 2.5
	  },
	  1024: {
			slidesPerView: 2.5
	  },
	},
 });
// Blog Slider

// Award Slider
var swiper = new Swiper(".award__slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	breakpoints: {
	  0: {
		slidesPerView: 2.3,
		spaceBetween: 10,
		freeMode: true
	  },
	  768: {
		slidesPerView: 3
	  },
	  1024: {
		slidesPerView: 3
	  },
	},
  });
// Award Slider

// Team Slider
var swiper = new Swiper(".team__slider", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
	  0: {
		slidesPerView: 2.5,
		spaceBetween: 20,
		freeMode: true,
		navigation: false
	  },
	  600: {
		slidesPerView: 3
	  },
	  768: {
		slidesPerView: 4
	  },
	  1024: {
		slidesPerView: 5
	  },
	},
  });
// Team Slider