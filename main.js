//Creare in HTML una griglia di 5x5 quadrati vuoti.:
//Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.;
//BONUS 1: generare la griglia con jQuery;
//BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde;

for (var i = 0; i < 25; i++) {
    $('#griglia').append('<div class="quadrato"><p>' +  numeri_random + '</p></div>');

    var numeri_random ;
    $('.quadrato').each(function(){
        numeri_random = getRndInteger(0, 10);
    });
}

function getRndInteger( max, min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// var numeri_random = [];
// for (var i = 0; numeri_random.length < 25; i++) {
//     var numero = getRndInteger(0, 10);
//     numeri_random.push(numero)
//     console.log(numeri_random);
// }
// console.log(numeri_random);
