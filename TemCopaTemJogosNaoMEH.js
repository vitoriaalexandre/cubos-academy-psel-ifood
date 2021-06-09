

function solucao(ano) {
	const olimp = 2016;
    const copa = 2018;
    const ehOlimp = ano - olimp;
    const ehCopa = ano - copa;

    if(ehOlimp % 4 === 0){
       console.log ("JOGOS");
    }
    else if(ehCopa % 4 === 0){
       console.log ("COPA");
    }
    else{
        console.log ("MEH");
    }
}