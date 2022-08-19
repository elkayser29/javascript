function sumaE(numero1, numero2,numero3){
    var suma = numero1 + numero2 + numero3;
    
    return suma;
}

const numeroE = sumaE(3,7,5);
console.log(numeroE);


function nombreE(nombre,apellido1,apellido2){
    console.log(nombre + apellido1 + apellido2) ;
}

nombreE("Pedro","Monje","Vargas");


function nGrande(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }
    else if(numero1<numero2){
        return numero2;
    }
}

const nGrandeE = nGrande(12,7);
console.log(nGrandeE);




