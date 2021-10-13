let slider = document.querySelector("#slider_images");
let sliderControls = document.querySelector("#slider_controls");
let leftArrow = document.querySelector("#slider #slider_controls .arrow-left");
let rightArrow = document.querySelector(
	"#slider #slider_controls .arrow-right"
);

let timer;

leftArrow.addEventListener("click", () => {
	imageSlide(false);
});
rightArrow.addEventListener("click", () => {
	imageSlide(true);
});

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

timer = setInterval(() => {
	imageSlide(true);
}, 3000);
