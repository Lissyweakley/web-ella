//Once the html is loaded running event listeners
$(document).ready(function($){
	//click event on navagationg image 
	$(".nav").click(function() {
		//display menu background 
		$(".veil").toggle();
		//animating menu to move in from right hand side 
		$(".menu").animate({
			right: ["+=220", "linear"]
		},300);
	});
//closing click function (return home page to normal)
	$(".close-me").click(function() {
		$(".menu").animate({
			right: ["-=220", "linear"]
		},300);
		//waiting for sliding animation to finish before closing
		$(":animated").promise().done(function() {
		$(".veil").toggle();
    
	});
		
	});

	//animating the gallery images
	var gallery = 1;
		$(".arrow-right").click(function(){
			if(gallery<6){
				gallery++;
				var backGround = "url(images/gallery"+gallery+".jpg) no-repeat"; 
				$(".gallery-case").fadeOut("slow");
				$(":animated").promise().done(function() {
				$(".gallery-case").css({"background": backGround, "background-size": "cover", "background-position": "center top"});
				$(".gallery-case").fadeIn("slow");

				});
			}

			else {
				gallery=1;
				backGround = "url(images/gallery"+gallery+".jpg) no-repeat";
				$(".gallery-case").fadeOut("slow");
				$(":animated").promise().done(function() { 
				$(".gallery-case").css({"background": backGround, "background-size": "cover", "background-position": "center top"});
				$(".gallery-case").fadeIn("slow");

			});
		}


		});

//When the right button is clicked there is an if/else statment that is used to swap the images.
// if the gallery number is smaller than 6 (we use 6 becasue there are six images in the gallery).
// The varible 'gallery' is given the value 1 (to represent the first image which is aready showing when the page loads)
//another varible 'backGround' is given the valuable "url(images/gallery"+gallery+".jpg) no-repeat" 
//the imporant part of this is the naming of my images (gallery1.jpg, gallery2.jpg, etc.) this means the var galley (+gallery+) 
//is added in the number spot so the url chages up one number to get the right image. 
//A fade animation is added as is css to make the image responsive.


		$(".arrow-left").click(function(){
			if(gallery>1){
				gallery--;
				var backGround2 = "url(images/gallery"+gallery+".jpg) no-repeat";
				$(".gallery-case").fadeOut("slow");
				$(":animated").promise().done(function() {
				$(".gallery-case").css({"background": backGround2, "background-size": "cover", "background-position": "center top"});
				$(".gallery-case").fadeIn("slow");
			});
	}		
			else {
				gallery=6;
				backGround2 = "url(images/gallery"+gallery+".jpg) no-repeat";
				$(".gallery-case").fadeOut("slow"); 
				$(":animated").promise().done(function() {
				$(".gallery-case").css({"background": backGround2, "background-size": "cover", "background-position": "center top"});
				$(".gallery-case").fadeIn("slow");
			});
			
		}
			

		});

//same as the right arrow button but for the left one


	$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});



});

