// Descrizione:
// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
//  Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta,
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri da 
//  indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

//Array numeri casuali 

array_rand = [];

i=0;
let rand_num = 0;
while(i < 5) {
    rand_num = Math.floor(Math.random() * 100);
    array_rand.push(rand_num);
    i++;
}
console.log(array_rand);

//stampo in pagina l'array 
document.writeln(array_rand);


//creo una funzione che rimuove i numeri dal dom in 4 secondi

setTimeout(empty_dom, 4000);

function empty_dom() {
   document.writeln("");
}

//dopo 30 secondi chiedo all'utente un numero e lo inserisco in un array
user_array = [];
setTimeout(input_user, 30000);


function input_user() {
    let user_number = parseInt(prompt("inserisci un numero"));
    return user_number;
}

let numero_utente = input_user();

user_array.push(numero_utente);

console.log(user_array);