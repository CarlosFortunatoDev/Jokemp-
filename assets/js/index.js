let jogadorNome;
let jogadorEscolha = 0;
let jogadorPontos = 0

let computadorEscolha = 0;
let computadorPontos = 0

//Exibe mensagem no console.
const mensagem = (texto) =>{
    document.querySelector('#mensagem').innerHTML = texto;
}

//Define nome do jogador.
const definirNomeJogador = (nome) =>{
    document.querySelector('#jogador-nome').innerHTML = nome
} 

// Sorteia entre dois números.
const sortear = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Verifica quem ganhou:  0)Empate  1)Jogador  2)Computador
const verificarEscolha = (jogador, computador) => {
    if (jogador === 1 && computador === 1) {
        return 0;
    } else if (jogador === 1 && computador === 2) {
        return 2
    } else if (jogador === 1 && computador === 3) {
        return 1
    } else if (jogador === 2 && computador === 1) {
        return 1
    } else if (jogador === 2 && computador === 2) {
        return 0
    } else if (jogador === 2 && computador === 3) {
        return 2
    } else if (jogador === 3 && computador === 1) {
        return 2
    } else if (jogador === 3 && computador === 2) {
        return 1
    } else if (jogador === 3 && computador === 3) {
        return 0
    } 
}

//Soma pontos para o jogador
const somarPontoJogador = () => {
    jogadorPontos ++;
    document.querySelector('#jogador-pontos').innerHTML = jogadorPontos
}

//Soma pontos para o jogador
const somarPontoComputador = () => {
    computadorPontos ++;
    document.querySelector('#computador-pontos').innerHTML = computadorPontos
}

const selecionar = (tipo, escolha) =>{
    document.querySelector(`#${tipo}-escolha-${escolha}`).classList.add('selecionado')
}

const deselecionar = (tipo, escolha) =>{
    document.querySelector(`#${tipo}-escolha-${escolha}`).classList.remove('selecionado')
}

// Jogada do usuário:  1)Pedra  2)Papel  3)Tesoura
const jogar = (escolha) => {
    jogadorEscolha = escolha
    selecionar('jogador', jogadorEscolha)

    //Sortear jogadada do computador.
    computadorEscolha = sortear(1,3)
    selecionar('computador', computadorEscolha)

    let ganhador = verificarEscolha(jogadorEscolha, computadorEscolha)
    if (ganhador == 0) {
        mensagem('Empate')
    } else if (ganhador == 1) {
        mensagem(`Ponto para ${jogadorNome}`)
        somarPontoJogador()
    } else if (ganhador == 2) {
        mensagem('Ponto para Computador')
        somarPontoComputador()
    }
    
    //Validar quem ganhou

    //Somar ponto

    //Exibir para o usuário
}

document.querySelector('#jogador-escolha-1').onclick = () => {jogar(1)}
document.querySelector('#jogador-escolha-2').onclick = () => {jogar(2)}
document.querySelector('#jogador-escolha-3').onclick = () => {jogar(3)}

jogadorNome = prompt('Qual é o seu nome?')
definirNomeJogador(jogadorNome)

mensagem(`Bem vindo ${jogadorNome}, está preparado? Escolha uma opção acima`)