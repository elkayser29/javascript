function moneda(){
    if(numeroR == 0){
        console.log("moneda cruz")
    }
    else if(numeroR == 1){
        console.log("moneda cara")
    }
}
const numeroR = Math.round(Math.random());
moneda();


