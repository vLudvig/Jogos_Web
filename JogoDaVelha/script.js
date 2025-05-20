let jogador1 = ''
let jogador2 = ''
let lblVezDe = document.getElementById('vezDojogador')
let jogadorDaVez = ''
let ganhador = ''

let inputJogador1 = document.getElementById('jogador1')

document.getElementById('jogador2').addEventListener('blur', function(){
    jogador1 = document.getElementById('jogador1').value
    jogador2 = document.getElementById('jogador2').value
    jogadorDaVez = jogador1
    lblVezDe.innerText = "Vez de: " + jogadorDaVez  
})

document.querySelectorAll('.quadrado').forEach(function(quadrado) {
    quadrado.addEventListener('click', function(ev) {
        if(ganhador == ''){
            if(ev.currentTarget.value != 'X' && ev.currentTarget.value != 'O'){
                if(jogadorDaVez == jogador1 && jogadorDaVez != ''){
                    ev.currentTarget.textContent = 'X'
                    ev.currentTarget.value = 'X'
                    jogadorDaVez = jogador2
                    lblVezDe.innerText = "Vez de: " + jogadorDaVez 
                    verificaVencedor()
                }else if(jogadorDaVez == jogador2 && jogadorDaVez != ''){
                    ev.currentTarget.textContent = 'O'
                    ev.currentTarget.value = 'O'
                    jogadorDaVez = jogador1
                    lblVezDe.innerText = "Vez de: " + jogadorDaVez
                    verificaVencedor()
                }else{
                    fundoMsgErro.style.display = 'block'
                    inputJogador1.focus()
                }
            }
        }else{
            alert("É necessário reiniciar o jogo para continuar")
        }
    });
});

document.getElementById('reiniciar').addEventListener('click', function(){
    document.querySelectorAll('.quadrado').forEach(function(quadrado) {
        quadrado.innerText = ''
        quadrado.value = ''
    });
    jogadorDaVez = jogador1
    if(jogadorDaVez == ''){
        lblVezDe.innerText = "De quem é a vez?"
    } else{
        lblVezDe.innerText = "Vez de: " + jogadorDaVez
    }
    ganhador = ''
})

// a chamada desta função é feita a cada jogada para validar se existe um ganahdor
function verificaVencedor(){
    let tabuleiro = []
    const quadrados = document.querySelectorAll('.quadrado');
    const valores = Array.from(quadrados).map(function(quadrado){
        return quadrado.value
    })
    const regiao = Array.from(quadrados).map(function(quadrado){
        return quadrado.dataset.regiao
    })
    
    for(let i = 0; i < regiao.length; i++){
        let posicaoValor = {
            valor: valores[i],
            regiao: regiao[i]
        }
        tabuleiro.push(posicaoValor)
    }
    
    // valida linhas
    if(tabuleiro[0].valor == tabuleiro[1].valor && tabuleiro[1].valor == tabuleiro[2].valor && (tabuleiro[0].valor == 'X' || tabuleiro[0].valor == 'O')){
        if(tabuleiro[0].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }
    if(tabuleiro[3].valor == tabuleiro[4].valor && tabuleiro[4].valor == tabuleiro[5].valor && (tabuleiro[3].valor == 'X' || tabuleiro[3].valor == 'O')){
        if(tabuleiro[3].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }
    if(tabuleiro[6].valor == tabuleiro[7].valor && tabuleiro[7].valor == tabuleiro[8].valor && (tabuleiro[6].valor == 'X' || tabuleiro[6].valor == 'O')){
        if(tabuleiro[6].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }

    // valida colunas
    if(tabuleiro[0].valor == tabuleiro[3].valor && tabuleiro[3].valor == tabuleiro[6].valor && (tabuleiro[0].valor == 'X' || tabuleiro[0].valor == 'O')){
        if(tabuleiro[0].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }
    if(tabuleiro[1].valor == tabuleiro[4].valor && tabuleiro[4].valor == tabuleiro[7].valor && (tabuleiro[1].valor == 'X' || tabuleiro[1].valor == 'O')){
        if(tabuleiro[1].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }
    if(tabuleiro[2].valor == tabuleiro[5].valor && tabuleiro[5].valor == tabuleiro[8].valor && (tabuleiro[2].valor == 'X' || tabuleiro[2].valor == 'O')){
        if(tabuleiro[2].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }

    // valida diagonal
    if(tabuleiro[0].valor == tabuleiro[4].valor && tabuleiro[4].valor == tabuleiro[8].valor && (tabuleiro[0].valor == 'X' || tabuleiro[0].valor == 'O')){
        if(tabuleiro[0].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }
    if(tabuleiro[2].valor == tabuleiro[4].valor && tabuleiro[4].valor == tabuleiro[6].valor && (tabuleiro[2].valor == 'X' || tabuleiro[2].valor == 'O')){
        if(tabuleiro[2].valor == 'X'){
            ganhador = jogador1
        }else{
            ganhador = jogador2
        }
        msgGanhador.innerText = ganhador + ' ganhou'
        fundoMsgGanhador.style.display = 'block'
    }
}

// tratamento de mensagens (Erro e Vitória)
const fundoMsgErro = document.getElementById('fundoMsgErro');
const fundoMsgGanhador = document.getElementById('fundoMsgGanhador');
let msgGanhador = document.getElementById('msgGanhador')
const fecharMsgBtnE = document.getElementById('fecharMsgErro');
const fecharMsgBtnG = document.getElementById('fecharMsgGanhador');

fecharMsgBtnE.addEventListener('click', function () {
    fundoMsgErro.style.display = 'none';
});


fecharMsgBtnG.addEventListener('click', function () {
    fundoMsgGanhador.style.display = 'none';
});
