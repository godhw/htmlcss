/*let a=221; //declare선언
const b=a-5; //assignment할당
a=4;
console.log(b,a);
*/

/*
let var const differance
let : redeclare x reassignment o
const : x x
var : o o
*/

/* String number boolean float
const what = "Hello";
const numb=111;
const gender=true;
const flo=55.1;
 */

/*array
const daysOfWeek =["mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
same with python
*/

/* Object : same with python dictionary
const Info={name:"sva", favfood:"sisi"}
console.log(Info.name);
*/

//function sayHello()

/*DOM interface 매우중요!!
const title = document.getElementById("title");
title.innerHTML = "HI"

const title = document.querySelector("#title");
title.innerHTML = "Hi! From JS";
title.style.color = "white";
document.title = "I own you now";
*/
/* CSS js로 조작하기
const title = document.querySelector("#title");

const BASE_COLOR = "blue";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
	const currentColor = title.style.color;
	if (currentColor === BASE_COLOR) {
		title.style.color = OTHER_COLOR;
	} else {
		title.style.color = BASE_COLOR;
	}
}

function init() {
	title.style.color = BASE_COLOR;
	title.addEventListener("click", handleClick);
}
init();
*/