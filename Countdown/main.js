// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi. Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


var numeri = [];
var i = 0;
var stringa_alert = "";

while (i < 5) {
  var n = Math.floor((Math.random() * 90) +1);
  if (!numeri.includes(n)) {
    numeri.push(n);
    stringa_alert += n;
    if(i < 5 - 1){
      stringa_alert += '  ';
    }
    i++;
  }
}
console.log(stringa_alert);
alert(stringa_alert);


var secondi = 30;
var elem = document.getElementById('countdown');
var risultato_elem = document.getElementById('risultato');
var tempo;
var quantitanumeri = 5;


var countDown = setInterval(countDownFunction, 1000);

function countDownFunction(){
  var h1 = document.getElementById("secondi");
  h1.innerHTML = secondi;
    if(secondi == 0){
        clearInterval(countDown);
        var promptutente = promptUser(quantitanumeri);
        var confronto = confronta_array(numeri, promptutente);
        console.log(confronto);
        var risultato = document.getElementById("risultato");
        risultato.innerHTML = "Hai indovinato " + confronto.length + " numeri <br>";
    }
    secondi--;
}

function promptUser(quantitanumeri) {
  var numeri_utenti = [];
  var messaggio = "Inserisci un numero";
  while(numeri_utenti.length < quantitanumeri) {
    var numero_utente = parseInt(prompt(messaggio));
    if(!numeri_utenti.includes(numero_utente)) {
      console.log(numero_utente);
      numeri_utenti.push(numero_utente);
      messaggio = "Inserisci un numero";
    }
    else {
      messaggio = "Hai già inserito questo numero. Inseriscine un altro";
    }
  }
  console.log(numeri_utenti);
  return numeri_utenti;
}

function confronta_array(array1, array2) {
  var numeri_indovinati = [];
  for (var i = 0; i < array1.length; i++) {
    if (array2[i] == array1[i]) {
      numeri_indovinati.push(array2[i]);
    }
  }
  return numeri_indovinati;
}
