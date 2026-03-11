let botao = document.getElementById('botaoCor');
botao.addEventListener('click', () => {
    //coloca a cor atual na variável
    let corAtual =
    document.body.style.backgroundColor;
    //muda cor de fundo
    document.body.style.backgroundColor =   'blue'; 
    if(corAtual == 'blue' ){
        document.body.style.backgroundColor = 'pink'; 
   
    }
    else{
          document.body.style.backgroundColor = 'blue'; 
    }

});
 