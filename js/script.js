$(function(){

	setTimeout(function() {
		$('#first_video').hide()
	},3000)

	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})

	$('.header .header__body .header__menu .header__list li a.header__link').click(function(){
		$('body').removeClass('lock');
		$('.header__burger,.header__menu').removeClass('active');
	})

	$('.head_carousel').owlCarousel({
        autoplay:false,
        nav:true,
        loop:true,
        dots:false,
		autoplayTimeout:10000,
		rewind: true,
        smartSpeed:1000,
		animateOut: 'fadeOut',
		mouseDrag: false,
		center: true,
		navText: ['<i class="glyphicon glyphicon-menu-left"></i>', '<i class="glyphicon glyphicon-menu-right"></i>'],
		margin:10,
		responsive:{
			600:{
				items:5
			}
		}
    });

 	new WOW().init();

// Рабочий якорь с переходом по страницам
	 $("body").on('click', '[href*="#"]', function(e){
	  var fixed_offset = 100;
	  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	  e.preventDefault();
	});

//Для скрола вверх
   	$(window).on('scroll', function(){
	    var positionTop = $(this).scrollTop();
	    if (positionTop >= 200) {
	      $('#top').addClass('scroll');
	    }else{
	      $('#top').removeClass('scroll');
	    }
	});

	//Меню для контактов

	$(document).ready(function(){
		var menuItemNum=$(".menu-item").length;
		var angle=-120;
		var distance=-90;
		var startingAngle=-180+(-angle/2);
		var slice=angle/(menuItemNum-1);
		TweenMax.globalTimeScale(0.8);
		$(".menu-item").each(function(i){
		  var angle=startingAngle+(slice*i);
		  $(this).css({
			transform:"rotate("+(angle)+"deg)"
		  })
		  $(this).find(".menu-item-icon").css({
			transform:"rotate("+(-angle)+"deg)"
		  })
		})
		var on=false;
	  
		$(".menu-toggle-button").mousedown(function(){
		  TweenMax.to($(".menu-toggle-icon"),0.1,{
			scale:0.65
		  })
		})
		$(document).mouseup(function(){
		  TweenMax.to($(".menu-toggle-icon"),0.1,{
			scale:1
		  })
		});
		$(document).on("touchend",function(){
		  $(document).trigger("mouseup")
		})
		$(".menu-toggle-button").on("mousedown",pressHandler);
		$(".menu-toggle-button").on("touchstart",function(event){
		  $(this).trigger("mousedown");
		  event.preventDefault();
		  event.stopPropagation();
		});
	  
		function pressHandler(event){
		  on=!on;
	  
		  TweenMax.to($(this).children('.menu-toggle-icon'),0.4,{
			rotation:on?45:0,
			ease:Quint.easeInOut,
			force3D:true
		  });
	  
		  on?openMenu():closeMenu();
		  
		}
		function openMenu(){
		  $(".menu-item").each(function(i){
			var delay=i*0.08;
	  
			var $bounce=$(this).children(".menu-item-bounce");
	  
			TweenMax.fromTo($bounce,0.2,{
			  transformOrigin:"50% 50%"
			},{
			  delay:delay,
			  scaleX:0.8,
			  scaleY:1.2,
			  force3D:true,
			  ease:Quad.easeInOut,
			  onComplete:function(){
				TweenMax.to($bounce,0.15,{
				  // scaleX:1.2,
				  scaleY:0.7,
				  force3D:true,
				  ease:Quad.easeInOut,
				  onComplete:function(){
					TweenMax.to($bounce,3,{
					  // scaleX:1,
					  scaleY:0.8,
					  force3D:true,
					  ease:Elastic.easeOut,
					  easeParams:[1.1,0.12]
					})
				  }
				})
			  }
			});
	  
			TweenMax.to($(this).children(".menu-item-button"),0.5,{
			  delay:delay,
			  y:distance,
			  force3D:true,
			  ease:Quint.easeInOut
			});
		  })
		}
		function closeMenu(){
		  $(".menu-item").each(function(i){
			var delay=i*0.08;
	  
			var $bounce=$(this).children(".menu-item-bounce");
	  
			TweenMax.fromTo($bounce,0.2,{
			  transformOrigin:"50% 50%"
			},{
			  delay:delay,
			  scaleX:1,
			  scaleY:0.8,
			  force3D:true,
			  ease:Quad.easeInOut,
			  onComplete:function(){
				TweenMax.to($bounce,0.15,{
				  // scaleX:1.2,
				  scaleY:1.2,
				  force3D:true,
				  ease:Quad.easeInOut,
				  onComplete:function(){
					TweenMax.to($bounce,3,{
					  // scaleX:1,
					  scaleY:1,
					  force3D:true,
					  ease:Elastic.easeOut,
					  easeParams:[1.1,0.12]
					})
				  }
				})
			  }
			});
			
	  
			TweenMax.to($(this).children(".menu-item-button"),0.3,{
			  delay:delay,
			  y:0,
			  force3D:true,
			  ease:Quint.easeIn
			});
		  })
		}
	  })
});


// Печатающийся текст
// $(function(){
// 	$("#typing").typed({
// 		strings: [" SEO?", " SEM?", " SMM?", " CRM?", " web сайт?", " мобильное приложение?", " продвижение?", " брендинг?", " ребрендинг?", " PR?", " реклама?", " увеличение продаж?", " увеличение узнаваемости?", " улучшение имиджа?", " моушн дизайн?", " видеосъемка?", " фотосъемка?"],
// 		typeSpeed: 70,
// 		backDelay: 1500,
// 		startDelay: 2500,
// 		loop: true,
// 		loopCount: 10,
// 		contentType: 'html',      
// 	});
// });




// const gooey = document.querySelector('.gooey-menu-open-button');

//  gooey.onclick = function(){
//         gooey.style.width = '80px';
//         gooey.style.height ='80px';
//         // gooey.style.opacity ='0.6';
            
//  }
    
// init();



var revapi133,
tpj;
var $ = jQuery.noConflict();

(function() {
	if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad); else onLoad();

	function onLoad() {
		if (tpj===undefined) { tpj = jQuery; if("off" == "on") tpj.noConflict();}
			if(tpj("#rev_slider_133_1").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_133_1");
			}else{
			revapi133 = tpj("#rev_slider_133_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"include/rs-plugin/js/",
				sliderLayout:"fullscreen",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"on",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					 mouseScrollReverse:"default",
					onHoverStop:"off",
					touch:{
						touchenabled:"on",
						touchOnDesktop:"off",
						swipe_threshold: 75,
						swipe_min_touches: 1,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:false,
						style:"hermes",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:20,
						space:5,
						tmp:''
					}
				},
				responsiveLevels:[1240,1024,778,480],
				visibilityLevels:[1240,1024,778,480],
				gridwidth:[1240,1024,778,480],
				gridheight:[868,768,960,720],
				lazyType:"none",
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:0,
				stopAtSlide:1,
				shuffle:"off",
				autoHeight:"off",
				fullScreenAutoWidth:"off",
				fullScreenAlignForce:"off",
				fullScreenOffsetContainer: "",
				fullScreenOffset: "",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"off",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}; /* END OF revapi call */

		BubbleMorphAddOn(jQuery, revapi133, false)
	}; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */
