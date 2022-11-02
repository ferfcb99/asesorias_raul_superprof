console.log("Funcionando");

// esta funcion recibe un numero entero y devuelve 1 si es primo y 0 sino es
function esPrimo(numero){

    let cuentaDivisores = 0;
    for (let i = 1; i <= numero; i++) {
       if(numero % i == 0){
        cuentaDivisores = cuentaDivisores + 1;
       } 
    }
    if(cuentaDivisores == 2){
        return 1;
    }
    return 0;
}

// console.log(esPrimo(5));

// esta funcion busca primos en un intervalo
function misPrimos(inicio, final){

    while(inicio <= final){
        if(esPrimo(inicio) === 1){
            console.log(`El ${inicio} es primo`);
        }else{
            console.log(`El ${inicio} NO es primo`);
        }
        inicio = inicio + 1;
    }

}


// misPrimos(500, 1500);