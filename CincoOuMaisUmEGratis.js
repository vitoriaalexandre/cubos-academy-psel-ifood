
function solucao(precos) {
    
    if(precos.length >= 5){
        let menorValor = precos[0];
        for(let i = 1; i < precos.length; i++){
            if (precos[i] < menorValor){
                menorValor = precos[i];
            }
        }
        let valorFinal = 0;
        for (let i = 0; i < precos.length; i++){
            valorFinal = valorFinal + precos[i];  
        }
        valorFinal = valorFinal - menorValor;
        console.log (valorFinal);
    }
    else {
        let valorFinal = 0;
        for (let i = 0; i < precos.length; i++){
            valorFinal = valorFinal + precos[i];  
        }
        console.log (valorFinal);
    }
    
        
    }