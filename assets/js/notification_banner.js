function createNotificationBanner(notificationMessage) {
	/** @ Html element for the notification banner*/
	let notificationBanner = document.createElement("div");
	notificationBanner.classList.add("notificationBanner");

	//Deleting the notification element from the page when its animation ends
	notificationBanner.addEventListener("animationend", () => {
		notificationBanner.remove();
	});

	notificationBanner.innerHTML = notificationMessage;
	document.body.prepend(notificationBanner);
}

document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	for (let element of document.querySelector("form").elements) {
		if (element.getAttribute("type") == "checkbox") {
			element.checked = false;
		} else if (element.value != null && element.value != "Nulstil") {
			element.value = "";
		}
		//console.log(element.getAttribute("type"));
	}
	createNotificationBanner(
		"Tak for din henvendelse vi kontakter dig hurtigst muligt"
	);
	return false;
});
