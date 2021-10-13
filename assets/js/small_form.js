import { createNotificationBanner } from "./notification_banner.js";
document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("test");
	createNotificationBanner("test");
	return false;
});
