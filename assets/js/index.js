document.querySelector('#jogador-escolha-1').onclick = () =>{}
document.querySelector('#jogador-escolha-2').onclick = () =>{}
document.querySelector('#jogador-escolha-3').onclick = () =>{}

let jogadorNome = prompt('Qual é o seu nome?')
document.querySelector('#jogador-nome').innerHTML = jogadorNome

document.querySelector('#mensagem').innerHTML = `Bem vindo ${jogadorNome}, está preparado? Escolha uma opção acima`