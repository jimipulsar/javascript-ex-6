//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi. Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

var nome_utente = prompt('Inserisci il tuo nome');
document.getElementById("utente").innerHTML = 'Ciao ' + nome_utente + ' !';
console.log(nome_utente);

var richiesta = document.getElementById("utente");

var trovato = false;

while (trovato == false) {
  var richiesta = prompt('Digita il tuo sesso, se maschio M, se femmina F');
  console.log(richiesta);
  if (richiesta == 'M') {
    utente.style.color = "#1daaca";
    trovato = true;
  }
  else if (richiesta == 'F') {
    utente.style.color = "pink";
    trovato = true;
  }
  else {
    alert('Hai inserito un valore non valido. Riprova');
  }
}
