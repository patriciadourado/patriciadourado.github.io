import $ from 'jquery';
import 'bootstrap';

/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
	$(window).on('load',function() {
		// will first fade out the loading animation 
		  $("#loader").fadeOut("slow", function(){
		  // will fade out the whole DIV that covers the website.
		  $("#preloader").delay(300).fadeOut("slow");
  
		});       
  
	})

	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
	
	// toggle 
		$(document).ready(function(){
			$('.menu-toggle').on('click', function(e) {			
				$('.menu-toggle').toggleClass('is-clicked');
				$('.main-navigation').slideToggle();
			});
		});
			
		// nav items
		$(document).ready(function(){
			$('.main-navigation').find('li a').on('click', function() {   
			// update the toggle button	
			$('.menu-toggle').toggleClass('is-clicked'); 
			// fadeout the navigation panel
			$('.main-navigation').fadeOut();   		
			});
		});

	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
	$(document).ready(function(){  
		$('.smoothscroll').on('click', function (e) {	 	
			e.preventDefault();
			var target = this.hash,
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 2800, 'swing', function () {
				window.location.hash = target;
			});
		});  
	});    

	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
   var pxShow = 300; // height on which the button will show
   var fadeInTime = 400; // how slow/fast you want the button to show
   var fadeOutTime = 400; // how slow/fast you want the button to hide

  // Show or hide the sticky footer button
   $(window).scroll(function() {
		
	   if (!( $("#header-search").hasClass('is-visible'))) {
		   if ($(window).scrollTop() >= pxShow) {
			$("#go-top").fadeIn(fadeInTime);
		   } else {
			$("#go-top").fadeOut(fadeOutTime);
		   }
	   }		
   });
