export function createNotificationBanner(notificationMessage) {
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
