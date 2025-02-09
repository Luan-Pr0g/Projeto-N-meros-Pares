function loop(comeco){

    let x;
    for(x=comeco; x>0; x--){ //igualei os dois pois assim da pra começar a contagem regressiva
        
        if(x % 2 == 0){ //dividi por 2 para encontrar os pares, se der resto 0, é par
            console.log(`O valor ${x} é par`);
        }   
    }
}

loop(10);
console.log("\n");
loop(25);