let username=""
function usuario() {
  username = document.getElementById("username").value;
  console.log(username);
  let pregunta = document.getElementById("nombre");
  pregunta.innerText = username + ", " + "¿list@ para jugar?";
   document.getElementById("trivia").style.display = 
   "none";
   document.getElementById("avatar").style.display = 
   "block";
   document.getElementById("reseteo").style.display = 
   "none";
    document.getElementById("preguntas").style.display = 
   "none";
}
    
function play() {
   document.getElementById('nombreusuario').innerHTML=`<font>Hola `+username+`</l>`
  imageuser = document.querySelector('input[name="imageuser"]:checked').value
  document.getElementById("imageavatar").src=imageuser
  document.getElementById("avatar").style.display = 
   "none";
    document.getElementById("preguntas").style.display = 
   "block";
    document.getElementById("reseteo").style.display = 
   "block";
     document.getElementById("resultado").style.display = 
   "block";
}

function resultado() {
   document.getElementById("preguntas").style.display = 
   "none";
    document.getElementById("resultado").style.display = 
   "block";
    document.getElementById("reseteo").style.display = 
   "block";
    document.getElementById("preguntas").style.display = 
   "block";


var p1, p2, p3, nota;
 
// 1ª pregunta
if (document.getElementById('p12').checked==true) {p1=1}
if (p1==1) {document.querySelectorAll('.pregunta1')[1].style.color='#07D399'}
else {p1=0}
//2ª pregunta
if (document.getElementById('p23').checked==true) {p2=1}
if (p2==1) {document.querySelectorAll('.pregunta2')[2].style.color='#07D399'}
else {p2=0}
//3ª pregunta
if (document.getElementById('p32').checked==true) {p3=1}
if (p3==1) {document.querySelectorAll('.pregunta3')[1].style.color='#07D399'}
else {p3=0}
 
nota=p1+p2+p3;
document.getElementById('resultado').innerHTML= `Aciertos ` +nota;
 alert("¡Felicidades, ya terminaste!")
}

function selectimage(image) {
  document.getElementById(image).checked = true
}