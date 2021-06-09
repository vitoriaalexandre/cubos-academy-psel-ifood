

function solucao(produtos) {
    let contTop = 0; 
  let contTotal = 0;
  for(let i = 0; i < produtos.length; i++){
      contTotal = contTotal + produtos[i].preco;
      if(produtos[i].preco > 10000){
          contTop = contTop + produtos[i].preco;
      }
  }
  const percentual = contTop / contTotal;
  const final = {
      totalTop: contTop,
      percentual: percentual
  };
  console.log(final);
}