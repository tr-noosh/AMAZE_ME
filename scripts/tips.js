var tutorial = document.getElementById('tutorial-img');

function gallery(number) {
	tutorial.src = `/images/tips/perspective-${parseInt(number)}.png`;
}