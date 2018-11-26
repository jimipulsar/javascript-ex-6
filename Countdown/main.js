// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//generiamo un alert con 5 numeri casuali
var numeri = [];
var i = 0;
while( i < 5){
 var n = Math.floor((Math.random() * 90) +1);
 var r = numeri.indexOf(n);
 if(r < 0){
 numeri.push(n);
 console.log(numeri);
 i++;
 }
}
alert("Ecco 5 numeri casuali: " + numeri);


var secondi = 30;
var elem = document.getElementById('countdown');
var tempo;

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (secondi == 0) {
    clearTimeout(timerId);
  } else {
    elem.innerHTML = secondi + ' secondi rimasti';
    secondi--;
  }
  if (secondi == 0) {
      tempo = document.getElementById('countdown');
      tempo.innerHTML = "Vai";
      return;
    }
}


var numero_utente = prompt("Inserisci il primo numero:");
var i = 0;
var trovato = false;
for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] == numero_utente) {
    trovato = true;
  }
}
if (trovato == true) {
  var notifica1 = document.getElementById('numerorichiesto');
  document.writeln("Hai indovinato il numero:" + numero_utente +"<br>") ;
  console.log("Accesso consentito.");
}
else {
  var notifica2 = document.getElementById('numerorichiesto');
  console.log("Accesso negato.");
}

var numero_utente = prompt("Inserisci il secondo numero:");
var i = 0;
var trovato = false;
for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] == numero_utente) {
    trovato = true;
  }
}
if (trovato == true) {
  var notifica1 = document.getElementById('numerorichiesto');
  document.writeln("Hai indovinato il numero:" + numero_utente) ;
  console.log("Accesso consentito.");
}
else {
  var notifica2 = document.getElementById('numerorichiesto');
  console.log("Accesso negato.");
}

var numero_utente = prompt("Inserisci il terzo numero:");
var i = 0;
var trovato = false;
for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] == numero_utente) {
    trovato = true;
  }
}
if (trovato == true) {
  var notifica1 = document.getElementById('numerorichiesto');
  document.writeln("Hai indovinato il numero:" + numero_utente) ;
  console.log("Accesso consentito.");
}
else {
  var notifica2 = document.getElementById('numerorichiesto');
  console.log("Accesso negato.");
}

var numero_utente = prompt("Inserisci il quarto numero:");
var i = 0;
var trovato = false;
for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] == numero_utente) {
    trovato = true;
  }
}
if (trovato == true) {
  var notifica1 = document.getElementById('numerorichiesto');
  document.writeln("Hai indovinato il numero:" + numero_utente) ;
  console.log("Accesso consentito.");
}
else {
  var notifica2 = document.getElementById('numerorichiesto');
  console.log("Accesso negato.");
}

var numero_utente = prompt("Inserisci il quinto numero:");
var i = 0;
var trovato = false;
for (var i = 0; i < numeri.length; i++) {
  if (numeri[i] == numero_utente) {
    trovato = true;
  }
}
if (trovato == true) {
  var notifica1 = document.getElementById('numerorichiesto');
  document.writeln("Hai indovinato il numero:" + numero_utente) ;
  console.log("Accesso consentito.");
}
else {
  var notifica2 = document.getElementById('numerorichiesto');
  console.log("Accesso negato.");
}

/*
var i = 0;
var numeri_random = [];


var secondi = 30;

var countdown = setInterval(numerigenerati, 3000);
function numerigenerati() {
  document.writeln("Mancano " + secondi + " secondi");
console.log(secondi);
if(secondi == 0) {
  clearInterval(countdown);
  console.log("bene");
}
secondi -= 1;
}



/*
setTimeout(messaggio, 3000);
function messaggio() {
console.log("Ciao");
alert("Ciao Classe");
}
console.log("Ciao Console log");

function getRandom(min, max){
  var random = Math.floor(Math.random() * (max - min + 1)+ min);
  return random;
}
*/
