var numeroPalavras = 0;
var encontrou = false;
var palavraCorreta = 'VITOR'

function escrevePalavra(){
    var palavra = document.getElementById('input-principal');
    
    if(palavra.value.length < 5){
        alert("A palavra deve conter 5 caracteres.");
    }else{
        numeroPalavras++;
        var palavraTemp = palavra.value;
        palavra.value = '';

        for(var i = 0; i < 5; i++){
            var encontrou = false;
            var letra = palavraTemp.slice(i, parseFloat(i+1));
            var posicaoRegiao =  parseFloat(i+1);
            var regiaoEscrever = document.querySelector(`[data-regiao="${numeroPalavras}.${posicaoRegiao}"]`);
            regiaoEscrever.innerText = letra.toUpperCase();
            validaLetraRegiao(numeroPalavras, palavraTemp);
        }
        
        if(palavraTemp.toUpperCase() == palavraCorreta.toUpperCase()){
            alert('Parabéns você encontrou a palavra correta!')
            encontrou = true;
        }
        if(encontrou === false && numeroPalavras > 4){
            alert('Acabou suas tentativas!' +
                '\nÉ necessário restaurar a página para novas tentativas!'
            )
        }
    }
    
}

function validaLetraRegiao(numero, palavra){
    for(var i = 0; i < 5; i++){
        var posicaoRegiao =  parseFloat(i+1);
        var regiao = document.querySelector(`[data-regiao="${numero}.${posicaoRegiao}"]`);
        
        for(var j = 0; j < 5; j++){
            if(regiao.textContent == palavraCorreta[j]){
                regiao.style.backgroundColor = 'rgb(202, 206, 0)'
            }
        }

        if(regiao.textContent == palavraCorreta[i]){
            regiao.style.backgroundColor = 'rgb(23, 139, 0)'
        }
    }
}