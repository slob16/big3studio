/*
Theme Name: Tanes
Description: Creative Coming Soon Template
Author: Erilisdesign
Theme URI: http://erilisdesign.com/preview/themeforest/html/tanes/
Author URI: http://themeforest.net/user/erilisdesign
Version: 1.0.2
License: https://themeforest.net/licenses/standard
*/

(function($) {
	"use strict";

	// Vars
	var body = $('body'),
		animated = $('.animated'),
		headerNav = $('nav.header-nav'),
		headerNavElem = $('nav.header-nav li'),
		headerNavElemHome = $('nav.header-nav li a[href="#home"]'),
		navToggle = $('.nav-toggle'),
		target,
		preloader = $('#preloader'),
		preloaderDelay = 350,
		preloaderFadeOutTime = 800,
		moveTo = $('a.moveto'),
		fullscreenSection = $('.section.fullscreen-element'),
		EDFullpage = $('#ed-fullpage'),
		countdown = $('.countdown[data-countdown]');


	// Mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		body.addClass('mobile');
	}

	function detectIE() {
		if (navigator.userAgent.indexOf('MSIE') != -1)
			var detectIEregexp = /MSIE (\d+\.\d+);/ // test for MSIE x.x
		else // if no "MSIE" string in userAgent
			var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ // test for rv:x.x or rv x.x where Trident string exists

		if (detectIEregexp.test(navigator.userAgent)){ // if some form of IE
			var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
			if (ieversion >= 9) {
				return true;
			}
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}

	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}

	// Preloader
	function init_ED_Preloader() {

		// Hide Preloader
		preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);

	}


	// Animations
	function init_ED_Animations() {
		if( !body.hasClass('mobile') ) {
			if( detectIE() ) {
				animated.css({
					'display':'block',
					'visibility':'visible'
				});
			} else {
				/* Starting Animation on Load */
				$('.onstart').each( function() {
					var elem = $(this);
					if ( !elem.hasClass('visible') ) {
						var animationDelay = elem.data('animation-delay');
						var animation = elem.data('animation');
						if ( animationDelay ) {
							setTimeout(function(){
								elem.addClass( animation + " visible" );
							}, animationDelay);
						} else {
							elem.addClass( animation + " visible" );
						}
					}
				});
			}
		}
	}


	//	Backgrounds
	function init_ED_PageBackground() {

		// Slideshow Background
		if (body.hasClass('slideshow-background')) {
			body.vegas({
				preload: true,
				timer: false,
				delay: 5000,
				transition: 'fade',
				transitionDuration: 1000,
				slides: [
					{ src: 'demo/images/image-12.jpg' },
					{ src: 'demo/images/image-2.jpg' },
					{ src: 'demo/images/image-3.jpg' },
					{ src: 'demo/images/image-4.jpg' }
				]
			});
		}

		// Slideshow Background - ZoomOut
		if (body.hasClass('slideshow-zoom-background')) {
			body.vegas({
				preload: true,
				timer: false,
				delay: 7000,
				transition: 'zoomOut',
				transitionDuration: 4000,
				slides: [
					{ src: 'demo/images/image-12.jpg' },
					{ src: 'demo/images/image-2.jpg' },
					{ src: 'demo/images/image-3.jpg' },
					{ src: 'demo/images/image-4.jpg' }
				]
			});
		}

		// Slideshow & Video Background
		if (body.hasClass('slideshow-video-background')) {
			body.vegas({
				preload: true,
				timer: false,
				delay: 5000,
				transition: 'fade',
				transitionDuration: 1000,
				slides: [
					{ src: 'demo/images/image-2.jpg' },
					{ src: 'demo/video/marine.jpg',
						video: {
							src: [
								'demo/video/marine.mp4',
								'demo/video/marine.webm',
								'demo/video/marine.ogv'
							],
							loop: false,
							mute: true
						}
					},
					{ src: 'demo/images/image-3.jpg' },
					{ src: 'demo/images/image-4.jpg' },
					{ src: 'demo/images/image-12.jpg' }
				]
			});
		}

		// Kenburns Background
		if (body.hasClass('kenburns-background')) {

			var kenburnsDisplayBackdrops = false;
			var kenburnsBackgrounds = [
				{ src: 'demo/images/image-2.jpg', valign: 'top' },
				{ src: 'demo/images/image-3.jpg', valign: 'top' },
				{ src: 'demo/images/image-9.jpg', valign: 'top' },
				{ src: 'demo/images/image-10.jpg', valign: 'top' }
			];

			body.vegas({
				preload: true,
				transition: 'swirlLeft2',
				transitionDuration: 4000,
				timer: false,
				delay: 10000,
				slides: kenburnsBackgrounds,
				walk: function (nb) {
					if (kenburnsDisplayBackdrops === true) {
						var backdrop;

						backdrop = backdrops[nb];
						backdrop.animation  = 'kenburns';
						backdrop.animationDuration = 20000;
						backdrop.transition = 'fade';
						backdrop.transitionDuration = 1000;

						body
							.vegas('options', 'slides', [ backdrop ])
							.vegas('next');
					}
				}
			});
		}

		// Youtube Video Background
		if ($('#youtube-background').length > 0) {
			var videos = [
				{videoURL: "0pXYp72dwl0", showControls:false, containment:'.overlay-video',autoPlay:true, mute:false, startAt:0,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:true}
			];

			$('.player').YTPlaylist(videos, true);
		}

		// Youtube Multiple Video Background
		if ($('#youtube-multiple-background').length > 0) {

			var videos = [
				{videoURL: "0pXYp72dwl0", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:true},
				{videoURL: "9d8wWcJLnFI", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:20,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:false},
				{videoURL: "nam90gorcPs", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:20,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:true}
			];

			$('.player').YTPlaylist(videos, true);

		}

		if(body.hasClass('mobile')) {
			$('.video-wrapper, .player').css('display', 'none');
		}

		// GMap Background
		if($('#gmap-background').length){

			var map = new GMaps({
				div: '#gmap-background',
				lat: 37.752797,
				lng: -122.409132,
				zoom: 14,
				scrollwheel: false
			});

			map.addMarker({
				lat: 37.752797,
				lng: -122.409132
			});

		}

		// Constellation Background
		if($('#constellation-background').length){
			if(typeof particlesJS === 'undefined') {
				console.log('Constellation Background: particlesJS not Defined.');
				return true;
			}

			particlesJS("constellation-background", {
				"particles": {
					"number": {
						"value": 120,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000000"
						}
					},
					"opacity": {
						"value": 1,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.9,
							"sync": false
						}
					},
					"size": {
						"value": 3,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 40,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 150,
						"color": "#ffffff",
						"opacity": 0.9,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 4,
						"random": true
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": false,
							"mode": "grab"
						},
						"onclick": {
							"enable": false,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});

		}

		// Edge Background
		if($('#edge-background').length){
			if(typeof particlesJS === 'undefined') {
				console.log('Edge Background: particlesJS not Defined.');
				return true;
			}

			particlesJS("edge-background", {
				"particles": {
					"number": {
						"value": 10,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "edge",
						"stroke": {
							"width": 0,
							"color": "#000"
						}
					},
					"opacity": {
						"value": 0.3,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"size": {
						"value": 170,
						"random": true,
						"anim": {
							"enable": true,
							"speed": 10,
							"size_min": 40,
							"sync": false
						}
					},
					"line_linked": {
						"enable": false
					},
					"move": {
						"enable": true,
						"speed": 5,
						"direction": "none",
						"random": true,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": false,
							"mode": "grab"
						},
						"onclick": {
							"enable": false,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});

		}

		// Bubble Background
		if($('#bubble-background').length){
			if(typeof particlesJS === 'undefined') {
				console.log('Bubble Background: particlesJS not Defined.');
				return true;
			}

			particlesJS("bubble-background", {
				"particles": {
					"number": {
						"value": 10,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#000"
						}
					},
					"opacity": {
						"value": 0.3,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"size": {
						"value": 170,
						"random": true,
						"anim": {
							"enable": true,
							"speed": 10,
							"size_min": 40,
							"sync": false
						}
					},
					"line_linked": {
						"enable": false
					},
					"move": {
						"enable": true,
						"speed": 5,
						"direction": "none",
						"random": true,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": false,
							"mode": "grab"
						},
						"onclick": {
							"enable": false,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			});

		}

	}


	// Fullscreen Sections Fix
	function init_ED_FullscreenFix() {
		if(!(1024 >= getWindowWidth() || body.hasClass('mobile'))) {
			fullscreenSection.each(function(){
				var elem = $(this),
					elemHeight = getWindowHeight(),
					elemContent = elem.find('.table-container'),
					elemContentHeight = elemContent.outerHeight(),
					elemPaddingTop = parseInt(elem.css('padding-top'), 10),
					elemPaddingBottom = parseInt(elem.css('padding-bottom'), 10),
					elemTrueHeight = elemContentHeight + elemPaddingTop + elemPaddingBottom;

				if( elemHeight >= elemTrueHeight ){
					elem.css('height', '100vh');
				} else if( elemHeight < elemTrueHeight ){
					elem.css('height', 'auto');
				}

			});
		} else {
			fullscreenSection.each(function(){
				$(this).css('height', 'auto');
			});
		}
	}

	function init_ED_Navigation() {
		navToggle.off('click');
		moveTo.off('click');

		if(!(1024 >= getWindowWidth() || body.hasClass('mobile'))) {

			if(headerNav.css('display', 'none')){
				headerNav.css('display', 'table');
			}

			if(navToggle.hasClass('open')){
				navToggle.removeClass('open');
			}

			// Fullpage
			if(EDFullpage.length){

				if(!EDFullpage.hasClass('fullpage-wrapper') || EDFullpage.hasClass('fp-destroyed')){
					EDFullpage.fullpage({
						//Navigation
						menu: '#menu',
						lockAnchors: false,
						anchors: ['home','about','team', 'services', 'portfolio', 'contact'],

						//Scrolling
						scrollingSpeed: 500,
						autoScrolling: true,

						//Design
						controlArrows: true,
						verticalCentered: true,
						paddingTop: '0',
						paddingBottom: '0',
						scrollOverflow: true,

						//Custom selectors
						sectionSelector: '.ed-section',
						slideSelector: '.ed-slide',

						//events
						afterLoad: function(anchorLink, index){
							if( detectIE() ) {
								animated.css({
									'display':'block',
									'visibility':'visible'
								});
							} else {
								animated.each( function() {
									var elem = $(this);
									if ( elem.parents('.fp-section').hasClass('active') ) {
										if ( !elem.hasClass('visible') ) {
											var animationDelay = elem.data('animation-delay');
											var animation = elem.data('animation');
											if ( animationDelay ) {
												setTimeout(function(){
													elem.addClass( animation + " visible" );
												}, animationDelay);
											} else {
												elem.addClass( animation + " visible" );
											}
										}
									} else {
										if ( !elem.hasClass('onstart') && elem.hasClass('visible') ) {
											var animation = elem.data('animation');
											elem.removeClass( animation + " visible" );
										}
									}
								});
							}
						},
						onLeave: function(index, nextIndex, direction){
							if(nextIndex === 1){
								body.removeClass('fp-active');
							} else {
								body.addClass('fp-active');
							}
						}
					});
				}

				moveTo.on( 'click', function(e) {
					e.preventDefault();

					var target = $(this).attr('href').substr(1);

					$.fn.fullpage.moveTo(target);
				});

			}
		} else {

			if(headerNav.css('display', 'block')){
				headerNav.css('display', 'none');
			}

			if(navToggle.hasClass('open')){
				headerNav.css('display', 'block');
			}

			// Fullpage - Destroy
			if(EDFullpage.length && EDFullpage.hasClass('fullpage-wrapper') && !EDFullpage.hasClass('fp-destroyed')){
				$.fn.fullpage.destroy('all');

				animated.each( function() {
					var elem = $(this),
						animation = elem.data('animation');

					elem.removeClass( animation + " visible" );
				});
			}

			navToggle.on('click', function(e) {
				e.preventDefault();
				if(!$(this).hasClass('open')){
					$(this).addClass('open');
					headerNav.slideDown(500);
				} else {
					headerNav.slideUp(500);
					$(this).removeClass('open');
				}
			});

			// Smooth Scroll
			moveTo.on('click', function(e) {
				e.preventDefault();

				var elem = $(this),
					elem_target = $("[data-id='"+ elem.attr('href').substr(1) +"']");
				if(elem_target === null){ sScroll_target = '#'; }

				$.smoothScroll({
					offset: 0,
					easing: 'swing',
					speed: 800,
					scrollTarget: elem_target,
					preventDefault: false
				});
			});

		}
	}


	// magnificPopup
	function init_ED_MagnificPopup() {
		$('.mfp-image').magnificPopup({
			type:'image',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		$('.mfp-gallery').each(function() {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				},
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
		});

		$('.mfp-iframe').magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: '//player.vimeo.com/video/%id%?autoplay=1'
					},
					gmaps: {
						index: '//maps.google.',
						src: '%id%&output=embed'
					}
				},
				srcAction: 'iframe_src'
			},
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

		$('.mfp-ajax').magnificPopup({
			type: 'ajax',
			ajax: {
				settings: null,
				cursor: 'mfp-ajax-cur',
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			midClick: true,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			callbacks: {
				ajaxContentAdded: function(mfpResponse) {
					initFlexslider();
				}
			}
		});

		$('.open-popup-link').magnificPopup({
			type: 'inline',
			midClick: true,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-zoom-in'
		});
	}

	// Slick
	function init_ED_Slick() {

		if(!$().slick) {
			console.log('Slider: Slick not Defined.');
			return true;
		}

		if ($('.ed-slider').length > 0) {
			$('.ed-slider').each( function(){
				var elem = $(this),
					sliderArrows = elem.attr('data-arrows'),
					sliderDots = elem.attr('data-dots'),
					sliderFade = elem.attr('data-fade'),
					sliderAutoplay = elem.attr('data-autoplay'),
					sliderAutoplaySpeed = elem.attr('data-autoplayspeed');

				if( sliderArrows === 'false' ) { sliderArrows = false; } else { sliderArrows = true; }
				if( sliderDots === 'false' ) { sliderDots = false; } else { sliderDots = true; }
				if( sliderFade === 'true' ) { sliderFade = true; } else { sliderFade = false; }
				if( sliderAutoplay === 'true' ) { sliderAutoplay = true; } else { sliderAutoplay = false; }
				if( !sliderAutoplaySpeed ) { sliderAutoplaySpeed = 3000; }

				elem.slick({
					arrows: sliderArrows,
					dots: sliderDots,
					fade: sliderFade,
					infinite: true,
					slide: '.slider-item',
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: sliderAutoplay,
					autoplaySpeed: sliderAutoplaySpeed,
					speed: 700
				});
			});
		}

		if ($('.ed-carousel').length > 0) {
			$('.ed-carousel').each(function() {
				var elem = $(this),
					carouselArrows = elem.data('arrows') || true,
					carouselDots = elem.data('dots') || true,
					carouselLoop = elem.data('loop') || false;

				elem.slick({
					arrows: carouselArrows,
					dots: carouselDots,
					infinite: carouselLoop,
					slide: '.carousel-item',
					slidesToShow: 4,
					slidesToScroll: 4,
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 3,
								infinite: true,
								dots: true
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			});
		}

	}

	function init_ED_Plugins() {

		// Responsive Video - FitVids
		$('.video-container').fitVids();

		// Countdown
		if (countdown.length > 0) {
			countdown.each(function() {
				var $countdown = $(this),
					finalDate = $countdown.data('countdown');
				$countdown.countdown(finalDate, function(event) {
					$countdown.html(event.strftime(
						'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
					));
				});
			});
		}

		// Placeholder
		$('input, textarea').placeholder();

		// Tooltip
		$('[data-toggle="tooltip"]').tooltip();

		// Popover
		$('[data-toggle="popover"]').popover();

	}


	function init_ED_Mailchimp() {
		$('.subscribe-form').ajaxChimp({
			callback: mailchimpCallback,
			url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
		});

		function mailchimpCallback(resp) {
			 if (resp.result === 'success') {
				$('.subscribe-result').html(resp.msg).fadeIn(1000);
				setTimeout(function(){
					$('.subscribe-result').fadeOut();
					$('.subscribe-form input[type="email"]').val('');
				}, 3000);
			} else if(resp.result === 'error') {
				$('.subscribe-result').html(resp.msg).fadeIn(1000);
			}
		}

		$('.subscribe-form input[type="email"]').focus(function(){
			$('.subscribe-result').fadeOut();
		});

		$('.subscribe-form input[type="email"]').on('keydown', function(){
			$('.subscribe-result').fadeOut();
		});

	}


	// Map
	function init_ED_Maps() {
		var gmap = $('.gmap');

		if (gmap.length > 0) {
			gmap.each(function() {
				var map_height = $(this).data('height');

				if (map_height){
					gmap.css('height',map_height);
				}
			});
		}

		// GMap Contact
		if($('#gmap-contact').length){

			var map = new GMaps({
				div: '#gmap-contact',
				lat: 37.752797,
				lng: -122.409132,
				zoom: 14,
				scrollwheel: false
			});

			map.addMarker({
				lat: 37.752797,
				lng: -122.409132,
				title: 'Lunar',
				infoWindow: {
					content: '<p class="mb-0">Cali Agency</p>'
				}
			});

		}
	}


	// Contact Form
	function init_ED_ContactForm() {
		var $contactForm = $('.contact-form');
		if( $contactForm.length < 1 ){ return true; }

		$contactForm.each( function(){
			var element = $(this),
				elementAlert = element.attr('data-alert-type'),
				elementResult = element.find('.contact-form-result');

			element.find('form').validate({
				submitHandler: function(form) {
					elementResult.hide();

					$(form).ajaxSubmit({
						target: elementResult,
						dataType: 'json',
						success: function( data ) {
							elementResult.html( data.message ).fadeIn( 400 );
							if( data.alert != 'error' ) { $(form).clearForm(); }
						}
					});
				}
			});

		});
	}


	// Photoswipe
	function init_ED_PhotoSwipe() {

		var initPhotoSwipeFromDOM = function(gallerySelector) {

			var parseThumbnailElements = function(el) {
			    var thumbElements = el.childNodes,
			        numNodes = thumbElements.length,
			        items = [],
			        articleEl,
			        childElements,
			        linkEl,
			        size,
			        item;

			    for(var i = 0; i < numNodes; i++) {

			        articleEl = thumbElements[i];

			        // include only element nodes
			        if(articleEl.nodeType !== 1) {
						continue;
			        }

			        linkEl = articleEl.children[0].children[0];
			        size = linkEl.getAttribute('data-size').split('x');

			        // create slide object
			        item = {
						src: linkEl.getAttribute('href'),
						w: parseInt(size[0], 10),
						h: parseInt(size[1], 10)
			        };

					item.title = true;
			        item.el = articleEl; // save link to element for getThumbBoundsFn

					if(articleEl.children[0].children.length > 1) {
						item.details = articleEl.children[0].children[1].outerHTML; // caption (contents of figure)
					}

			        if(linkEl.children.length > 0) {
						item.msrc = linkEl.children[0].getAttribute('src'); // thumbnail url
			        }

		          	// original image
		          	item.o = {
		          		src: item.src,
		          		w: item.w,
		          		h: item.h
		          	};

			        items.push(item);
			    }

			    return items;
			};

			// find nearest parent element
			var closest = function closest(el, fn) {
			    return el && ( fn(el) ? el : closest(el.parentNode, fn) );
			};

			var onThumbnailsClick = function(e) {
			    e = e || window.event;
			    e.preventDefault ? e.preventDefault() : e.returnValue = false;

			    var eTarget = e.target || e.srcElement;

			    var clickedListItem = closest(eTarget, function(el) {
			        return el.tagName === 'ARTICLE';
			    });

			    if(!clickedListItem) {
			        return;
			    }

			    var clickedGallery = clickedListItem.parentNode,
					childNodes = clickedListItem.parentNode.childNodes,
			        numChildNodes = childNodes.length,
			        nodeIndex = 0,
			        index;

			    for (var i = 0; i < numChildNodes; i++) {
			        if(childNodes[i].nodeType !== 1) {
			            continue;
			        }

			        if(childNodes[i] === clickedListItem) {
			            index = nodeIndex;
			            break;
			        }
			        nodeIndex++;
			    }

			    if(index >= 0) {
			        openPhotoSwipe( index, clickedGallery );
			    }
			    return false;
			};

			var photoswipeParseHash = function() {
				var hash = window.location.hash.substring(1),
			    params = {};

			    if(hash.length < 5) { // pid=1
			        return params;
			    }

			    var vars = hash.split('&');
			    for (var i = 0; i < vars.length; i++) {
			        if(!vars[i]) {
			            continue;
			        }
			        var pair = vars[i].split('=');
			        if(pair.length < 2) {
			            continue;
			        }
			        params[pair[0]] = pair[1];
			    }

			    if(params.gid) {
			    	params.gid = parseInt(params.gid, 10);
			    }

			    return params;
			};

			var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
			    var pswpElement = document.querySelectorAll('.pswp')[0],
			        gallery,
			        options,
			        items;

				items = parseThumbnailElements(galleryElement);

			    // Define options
			    options = {

					// Core
					index: index,
					bgOpacity: 0.87,
					loop: true,
					closeOnScroll: false,
					history: false,
			        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
			        focus: false,
					modal: false,

					// UI
			        addCaptionHTMLFn: function(item, captionEl, isFake) {
						if(!item.details) {
							captionEl.children[0].innerText = '';
							return false;
						}
						captionEl.children[0].innerHTML = item.details;
						return true;
			        },

					// Buttons/elements
					closeEl: true,
					captionEl: true,
					fullscreenEl: true,
					zoomEl: true,
					shareEl: true,
					counterEl: true,
					arrowEl: true,
					preloaderEl: true
			    };

			    // Exit if index not found
			    if( isNaN(options.index) ) {
			    	return;
			    }

			    if(disableAnimation) {
			        options.showAnimationDuration = 0;
			    }

			    // Pass data to PhotoSwipe and initialize it
			    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

			    // see: http://photoswipe.com/documentation/responsive-images.html
				var realViewportWidth,
				    useLargeImages = false,
				    firstResize = true,
				    imageSrcWillChange;

				gallery.listen('beforeResize', function() {

					var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
					dpiRatio = Math.min(dpiRatio, 2.5);
				    realViewportWidth = gallery.viewportSize.x * dpiRatio;


				    if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
				    	if(!useLargeImages) {
				    		useLargeImages = true;
				        	imageSrcWillChange = true;
				    	}
				    } else {
				    	if(useLargeImages) {
				    		useLargeImages = false;
				        	imageSrcWillChange = true;
				    	}
				    }

				    if(imageSrcWillChange && !firstResize) {
				        gallery.invalidateCurrItems();
				    }

				    if(firstResize) {
				        firstResize = false;
				    }

				    imageSrcWillChange = false;

				});

				gallery.listen('gettingData', function(index, item) {
				    if( useLargeImages ) {
				        item.src = item.o.src;
				        item.w = item.o.w;
				        item.h = item.o.h;
				    } else {
				        item.src = item.o.src;
				        item.w = item.o.w;
				        item.h = item.o.h;
				    }
				});

			    gallery.init();
			};

			// select all gallery elements
			var galleryElements = document.querySelectorAll( gallerySelector );
			for(var i = 0, l = galleryElements.length; i < l; i++) {
				galleryElements[i].setAttribute('data-pswp-uid', i+1);
				galleryElements[i].onclick = onThumbnailsClick;
			}

			// Parse URL and open gallery if it contains #&pid=3&gid=1
			var hashData = photoswipeParseHash();
			if(hashData.pid && hashData.gid) {
				openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
			}
		};

		initPhotoSwipeFromDOM('.portfolio-gallery');

	}

	// window load function
	$(window).on('load', function() {
		init_ED_FullscreenFix();
		init_ED_Preloader();
		init_ED_Animations();
		body.addClass('loaded');
	});

	// document.ready function
	jQuery(document).ready(function($) {
		init_ED_PageBackground();
		init_ED_Navigation();
		init_ED_MagnificPopup();
		init_ED_Slick();
		init_ED_Plugins();
		init_ED_Mailchimp();
		init_ED_Maps();
		init_ED_ContactForm();
		init_ED_PhotoSwipe();
	});

	// window.resize function
	$(window).on('resize', function () {
		init_ED_Navigation();
		init_ED_FullscreenFix();
	});

})(jQuery);