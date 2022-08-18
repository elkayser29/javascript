const saludar = (nombre,apellidos) => {
    console.log("hola " + nombre + " " + apellidos);
}
saludar("pedro","monje");

function dato (){
    var nombre = "pedro";
    var cierto = true;
    console.log(typeof(nombre));
    console.log(typeof(cierto));

}
dato();

const numeros = function(...valores){
    valores.forEach(element => {
        console.log(element)
    });
}
numeros(1,2,3,4,5);
