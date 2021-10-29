// JavaScript Document


var rozeThema;
var body

rozeThema = document.querySelector("body footer button");
body = document.querySelector("body");

rozeThema.addEventListener("click", doeRozeThema);

function doeRozeThema(){
body.classList.toggle("roze");
console.log('Groetjes');
}