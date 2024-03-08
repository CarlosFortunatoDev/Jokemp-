let jogadorNome;
let computadorEscolha;
let jogadorEscolha;

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

// Jogada do usuário:  1)Pedra  2)Papel  3)Tesoura
const jogar = (escolha) => {
    jogadorEscolha = escolha

    //Sortear jogadada do computador
    computadorEscolha = sortear(1,3)
    let ganhador = verificarEscolha(jogadorEscolha, computadorEscolha)

    
    //Validar quem ganhou

    //Somar ponto

    //Exibir para o usuário
}

document.querySelector('#jogador-escolha-1').onclick = () => {jogar(1)}
document.querySelector('#jogador-escolha-2').onclick = () => {jogar(2)}
document.querySelector('#jogador-escolha-3').onclick = () => {jogar(3)}

// jogadorNome = prompt('Qual é o seu nome?')
// document.querySelector('#jogador-nome').innerHTML = jogadorNome

// document.querySelector('#mensagem').innerHTML = `Bem vindo ${jogadorNome}, está preparado? Escolha uma opção acima`