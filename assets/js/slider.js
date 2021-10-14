//slideTime is the time for images to auto slide
let slideTime = 2000;

//loading all relevant elements as variables
let slider = document.querySelector("#slider_images");
let sliderControls = document.querySelector("#slider_controls");
let leftArrow = document.querySelector("#slider #slider_controls .arrow-left");
let rightArrow = document.querySelector(
	"#slider #slider_controls .arrow-right"
);

//initialising the timer controlling auto slide
let timer;

//eventlistener for arrows running imageSlide depending on going the usual direction(forward/right) or not and resetting the timer
leftArrow.addEventListener("click", () => {
	imageSlide(false);
	//clearing interval and resetting it
	clearInterval(timer);
	timer = setInterval(() => {
		imageSlide(true);
	}, slideTime);
});
rightArrow.addEventListener("click", () => {
	imageSlide(true);
	clearInterval(timer);
	timer = setInterval(() => {
		imageSlide(true);
	}, slideTime);
});

//function that will slide the image, depending on whether or not its going forward(right)
function imageSlide(direction) {
	if (slider.classList.contains("imgOne")) {
		if (direction) {
			slider.classList.replace("imgOne", "imgTwo");
		} else {
			slider.classList.replace("imgOne", "imgThree");
		}
	} else if (slider.classList.contains("imgTwo")) {
		if (direction) {
			slider.classList.replace("imgTwo", "imgThree");
		} else {
			slider.classList.replace("imgTwo", "imgOne");
		}
	} else {
		if (direction) {
			slider.classList.replace("imgThree", "imgOne");
		} else {
			slider.classList.replace("imgThree", "imgTwo");
		}
	}
}

//setting the timer to the interval function
timer = setInterval(() => {
	imageSlide(true);
}, slideTime);
