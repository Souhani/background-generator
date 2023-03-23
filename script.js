
var _ = require ('lodash');
console.log(_);

var array = [1,2,3,4,5,6,7,8,9]
console.log("show array", _.without(array,5))
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");



function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);



const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


var Random = document.getElementById("Random");

function lol (){

	color1.value = randColor();
	color2.value = randColor();
	setGradient();
}
lol();
Random.addEventListener("click", lol);
