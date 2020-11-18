//detect ie version

var ie = (function(){ 
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );
    return v > 4 ? v : undef;
 
}());
if (ie < 9){
	location = "ie8.html";
}

function typeToImg (date) {
	//for each character of date, make it the filename of html element div div 1-8
	for (var i = 0; i < date.length; i++){
		if (date.charAt(i) !== "."){
			var digit = date.charAt(i);
			var div = document.getElementById(i);
			div.setAttribute("src", "images/" + digit + ".svg");
		}
	}
}

typeToImg("08.12.2016");

var moon = document.getElementById("moon");
var mcAudio = document.getElementsByTagName("audio")[0];
var hiddenDate = document.getElementById("mc_trash_date_hidden");
function moonClick(){
	if (mcAudio.paused){
		if (hiddenDate.id == "mc_trash_date_hidden" || "mc_trash_date_rehide")
			hiddenDate.id = "mc_trash_date_reveal";
		if (window.matchMedia("only screen and (max-width: 1023px)").matches == false)
			moon.style.backgroundPosition = "-172px 0";
		setTimeout(function (){mcAudio.play()}, 500);
	}
	else {
		if (window.matchMedia("only screen and (max-width: 1023px)").matches == false)
			moon.style.backgroundPosition = "-86px 0";
		hiddenDate.id = "mc_trash_date_rehide";
		mcAudio.pause();
	}
	moon.addEventListener("click", moonClick);
};
moon.addEventListener("click", moonClick);

moon.addEventListener("mouseover", function(){
	if (mcAudio.paused){
		if (window.matchMedia("only screen and (max-width: 1023px)").matches == false){
			moon.style.backgroundPosition = "-86px 0";
		}
	}
	else if (window.matchMedia("only screen and (max-width: 1023px)").matches == false)
		moon.style.backgroundPosition = "-172px 0";	
	moon.addEventListener("mouseout", function(){
			moon.style.backgroundPosition = "0 0";
		});
	});
//rain moves left as you scroll
var rain = document.getElementById("videobg");

function rainScroll(){
	rain.style.backgroundPosition = Math.round(-window.pageYOffset / 13) + "px " + Math.round(window.pageYOffset / 15 - 10) + "px";
	//window.addEventListener("scroll", rainScroll);
}

window.addEventListener("scroll", rainScroll);

//vids and disco instead of videos and discography for mobile portrait
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