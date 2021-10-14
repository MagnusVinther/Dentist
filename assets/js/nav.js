let burger = document.querySelector("#burger");

//burger on click toggle open class
burger.addEventListener("click", (e) => {
	burger.parentElement.classList.toggle("open");
});
