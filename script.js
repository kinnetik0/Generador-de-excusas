
var who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
var action = ['ate', 'peed', 'crushed', 'broke'];
var what = ['my homework', 'my phone', 'the car'];
var when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

var n1 = Math.floor((Math.random() * 4));
var n2 = Math.floor((Math.random() * 3));
var n3 = Math.floor((Math.random() * 3));
var n4 = Math.floor((Math.random() * 5));

var excuse = who[n1] + " " + action[n2] + " " + what[n3] + " " + when[n4];

window.onload = function() {
    document.getElementById("excuse").innerHTML = excuse;
}