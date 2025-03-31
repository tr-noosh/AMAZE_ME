var tutorial = document.getElementById('tutorial-img');
var mobile_nav = document.getElementById('mobile-nav');
var header = document.getElementsByTagName('header')[0];
var cooldown = false;

function gallery(number) {
	tutorial.src = `/images/tips/perspective-${parseInt(number)}.png`;
}

function show_nav(state) {
	if (cooldown) {return;}
	header.style.display = ( state ? 'none' : 'block');
	mobile_nav.style.display = (state ? 'block' : 'none');
	cooldown = true;
	setTimeout(_=>{cooldown = false;}, 100);
}
