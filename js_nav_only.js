var getOrientation = window.matchMedia("only screen and (max-width: 768px) and (orientation: portrait)");

function shortenOrLengthenShit (mediaQueryList) {
	if (window.matchMedia("only screen and (max-width: 768px) and (orientation: portrait)").matches){
		var videos = document.querySelector('[alt="videos"]');
		var discography = document.querySelector('[alt="discography"]');
		videos.setAttribute("src", "images/vids.svg");
		discography.setAttribute("src", "images/disco.svg");
	}
	else {
		var videos = document.querySelector('[alt="videos"]');
		var discography = document.querySelector('[alt="discography"]');
		videos.setAttribute("src", "images/videos.svg");
		discography.setAttribute("src", "images/discography.svg");
	}
getOrientation.removeListener(shortenOrLengthenShit);
getOrientation.addListener(shortenOrLengthenShit);
}
window.onload = shortenOrLengthenShit;