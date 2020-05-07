//Creare in HTML una griglia di 5x5 quadrati vuoti.:
//Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.;
//BONUS 1: generare la griglia con jQuery;
//BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde;


//METODO 1
//griglia di 5x5 quadrati vuoti
for (var i = 0; i < 25; i++) {
    //scrivere un numero random tra 0 e 10
    var numeri_random ;
    numeri_random = getRndInteger(0, 10);

    //BONUS 1: generare la griglia con jQuery;
    $('#griglia').append('<div class="quadrato"><p>'+ numeri_random +'</p></div>');
};


//METODO 2;
//
// for (var i = 0; i < 25; i++) {
//     $('#griglia').append('<div class="quadrato"></div>');
// };
//
//
// $('.quadrato').each(function(){
//    var numeri_random = getRndInteger(0, 10);
//    $(this).append(numeri_random);
//    //BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde;
//    if ( numeri_random % 2 == 0 ) {
//         $(this).addClass('rosso');
//    }else {
//        $(this).addClass('verde');
//    };
// });



function getRndInteger( max, min) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
