let burger = document.querySelector("#burger");
burger.addEventListener("click", (e) => {
	burger.parentElement.classList.toggle("open");
});
