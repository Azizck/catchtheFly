
window.addEventListener("load",function (event){
 	 	// retrieve the racket image from  the DOM
	var racket = document.getElementById("racket");
			// retrieve the fly image from DOM
	var fly = document.getElementById("fly");
	// set the postion of the images to absloue 
	racket.style.position = "absolute";
	fly.style.position = "absolute";
	// function on mouser over to assign the image to follow the x and y of the mouse 
	document.onmousemove=function(event) {
		// X coordinates of the mouse 
		var mouseX = event.clientX;
		// Y coordiantes of the mouse 
		var mouseY = event.clientY;
		// change the style of the image so it follows the mouse 
		racket.style['left'] = [mouseX + 'px'];	
		racket.style['top'] = [mouseY + 'px'];
	};	
			
	fly.onmouseover = function(event) {
		console.log("move the fly");
		runAway();
	}

  // choose a random index from the x and y  arrays and assign it to the fly style  
	function runAway() {
		//set the left and top value to a random number less than 80 
		fly.style['top'] = [ [Math.random() * 80] +'%'];	
		fly.style['left'] = [ [Math.random() * 80] +'%'];	

	}
	
 });











