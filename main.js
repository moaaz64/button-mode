let button = document.getElementById('button');
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let h1_button_1 = document.getElementById('h1-button1');
let h1_button_2 = document.getElementById('h1-button2');

h1_button_2.style.display = "none";
button2.style.display = "none";
button1.style.marginLeft = "-1250px";
button1.style.cursor = "pointer";
button2.style.cursor = "pointer";
button.style.backgroundColor = "#fff";

button1.addEventListener('click',function(){
button1.style.display = "none";
button2.style.display = "";
button2.style.transition = "2s";
button2.style.marginLeft = "1250px";
button.style.backgroundColor = "#1f1f1f";
h1_button_2.style.display = "";
h1_button_1.style.display = "none";
})

button2.addEventListener('click',function(){
button1.style.display = "";
button1.style.transition = "2s";
button2.style.display = "none";
button.style.backgroundColor = "#fff";
h1_button_2.style.display = "none";
h1_button_1.style.display = "";
})