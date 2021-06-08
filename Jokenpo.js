function solucao(joao, andre) {
    
    if (joao == andre){
        console.log ("EMPATE");
    }
    else if (joao == "PEDRA" && andre == "TESOURA"){
        console.log ("JOAO");
    }
    else if (joao == "TESOURA" && andre == "PAPEL"){
        console.log ("JOAO");
    }
    else if (joao == "PAPEL" && andre == "PEDRA"){
        console.log ("JOAO");
    }
    else if (andre == "PEDRA" && joao == "TESOURA"){
        console.log ("ANDRE");
    }
    else if (andre == "TESOURA" && joao == "PAPEL"){
        console.log ("ANDRE");
    }
    else {
        console.log ("ANDRE")
    }
    }
    