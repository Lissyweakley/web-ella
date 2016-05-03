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

});

