
//ejercicio 1

const frutas = ["ð","ð¯","ð£","ð","ð","ð±","ð","ð","ð¥©"];

console.log(frutas.fill("ð¥", 4, frutas.length));


//ejercicio 2

const ejercicio2 = ["ð","ð","ð","ð","ð","ð","ð","ð","ð"];

let piÃ±as = 0;
for (let index = 0; index < ejercicio2.length; index++) {
    
    if (ejercicio2[index] != "ð")  { 
        piÃ±as++;
    }
    
}
console.log(ejercicio2);
console.log( "hay " + piÃ±as + " piÃ±as");

//ejercicio 3

const ejercicio3 = ["ð","ð","ð"];

for (let index = 0; index < ejercicio3.length; index++) {
    
    if (ejercicio3[index] != "ð")  { 
        ejercicio3.splice(index);
    }
    
}
console.log(ejercicio3);

//ejercicio 4

const ejercicio4 = ["ð","ð","ð","ð"];

for (let index = 0; index < ejercicio4.length; index++) {
    
    if (ejercicio4[index] === "ð")  { 
        ejercicio4[index] = "ð";
    }
    
}
console.log(ejercicio4);


//ejercicio 5

const ejercicio5 = ["ð¶ï¸","ð¥","ð¶ï¸","ð¥","ð¶ï¸","ð¥"];

for (let index = 0; index < ejercicio5.length; index++) {
    
    if (ejercicio5[index] === "ð¶ï¸")  { 
        ejercicio5[index+1] = "ð¥µ";
    }
    
}
console.log(ejercicio5);

//ejercicio 6

const ejercicio6 = ["ð´","ð´","ð´","ð","ð´","ð´","ð´"];


for (let index = 0; index < ejercicio6.length; index++) {
    
    if (ejercicio6[index] === "ð´") {
        
        ejercicio6[index+1] = "ð";
    }
    
}
console.log(ejercicio6);