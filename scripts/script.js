// JavaScript Document


var rozeThema;
var groenThema;
var body

rozeThema = document.querySelector("body footer button:first-of-type");
groenThema = document.querySelector("body footer button:nth-of-type(2)");
body = document.querySelector("body");

rozeThema.addEventListener("click", doeRozeThema);
groenThema.addEventListener("click", doeGroenThema);

function doeRozeThema(){
body.classList.toggle("roze");
body.classList.remove("groen");
console.log('Groetjes roze');
}

function doeGroenThema(){
body.classList.toggle("groen");
body.classList.remove("roze");
console.log('Groetjes groen');
}