
//ejercicio 1

const frutas = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];

console.log(frutas.fill("🥛", 4, frutas.length));


//ejercicio 2

const ejercicio2 = ["🍕","🍕","🍍","🍕","🍍","🍕","🍕","🍕","🍕"];

let piñas = 0;
for (let index = 0; index < ejercicio2.length; index++) {
    
    if (ejercicio2[index] != "🍕")  { 
        piñas++;
    }
    
}
console.log(ejercicio2);
console.log( "hay " + piñas + " piñas");

//ejercicio 3

const ejercicio3 = ["🍕","🍍","🍕"];

for (let index = 0; index < ejercicio3.length; index++) {
    
    if (ejercicio3[index] != "🍕")  { 
        ejercicio3.splice(index);
    }
    
}
console.log(ejercicio3);

//ejercicio 4

const ejercicio4 = ["🍓","🍋","🍓","🍋"];

for (let index = 0; index < ejercicio4.length; index++) {
    
    if (ejercicio4[index] === "🍓")  { 
        ejercicio4[index] = "🍄";
    }
    
}
console.log(ejercicio4);


//ejercicio 5

const ejercicio5 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];

for (let index = 0; index < ejercicio5.length; index++) {
    
    if (ejercicio5[index] === "🌶️")  { 
        ejercicio5[index+1] = "🥵";
    }
    
}
console.log(ejercicio5);

//ejercicio 6

const ejercicio6 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];


for (let index = 0; index < ejercicio6.length; index++) {
    
    if (ejercicio6[index] === "🎴") {
        
        ejercicio6[index+1] = "🃏";
    }
    
}
console.log(ejercicio6);