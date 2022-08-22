let numero = 1;
let i = 0;
do {
    if (i === 0) {
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);
// se sumará numero hasta el 5 que es cuando acaba el do. i solo se sumará 1 y numero se sumara todo el rato