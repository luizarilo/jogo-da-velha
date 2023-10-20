const jogadorUm = localStorage.getItem(`jogadorUm`)
const jogadorDois = localStorage.getItem(`jogadorDois`)
const nomeJogadorUm = document.querySelector(`.nome-um`)
const nomeJogadorDois = document.querySelector(`.nome-dois`)
const turnoJogador = document.getElementById(`turn-player`)
const options = document.querySelectorAll(`.cursor-pointer`)
const startGame = document.getElementById(`start-game`)
const resultado = document.getElementById(`result-game`)
const modalVencedor = document.getElementById(`modal`)
const botaoFechar = document.getElementById(`close`)
const botaoReiniciar = document.getElementById(`play-again`)
nomeJogadorUm.textContent = jogadorDois
nomeJogadorDois.textContent = jogadorUm
let turnPlayer = aleatorio()

startGame.addEventListener(`click`, function () {
    options.forEach(function (elemento) {
        elemento.disabled = false
    })
    startGame.disabled = true
    startGame.innerText = `Jogo iniciado`
    turnoJogador.style.display = `inline`
    alternarTurnos()
    aleatorio()
})

options.forEach(function (select) {
    select.addEventListener(`click`, function () {
        select.disabled = true;
        alternarTurnos()
        if (turnPlayer === jogadorUm) {
            select.innerText = `X`
            select.style.color = `red`
            select.value = `X`
        } else {
            select.innerText = `O`
            select.style.color = `green`
            select.value = `O`
        }
        verificaVencedor()
    })
})

function alternarTurnos() {
    if (turnPlayer === jogadorUm) {
        turnoJogador.innerText = jogadorUm
        turnPlayer = jogadorDois;
    } else {
        turnoJogador.innerText = jogadorDois
        turnPlayer = jogadorUm;
    }
}

function aleatorio() {
    const jogadores = [jogadorUm, jogadorDois]
    const indiceAleatorio = Math.floor(Math.random() * jogadores.length)
    const sorteio = jogadores[indiceAleatorio]

    return sorteio

}


function verificaVencedor() {
    const pos1 = options[0].value
    const pos2 = options[1].value
    const pos3 = options[2].value
    const pos4 = options[3].value
    const pos5 = options[4].value
    const pos6 = options[5].value
    const pos7 = options[6].value
    const pos8 = options[7].value
    const pos9 = options[8].value
    let vencedorUm = false
    let vencedorDois = false


    if (pos1 === `X` && pos2 === `X` && pos3 === `X` || pos4 === `X` && pos5 === `X` && pos6 === `X` || pos7 === `X` && pos8 === `X` && pos9 === `X` || pos1 === `X` && pos4 === `X` && pos7 === `X` || pos2 === `X` && pos5 === `X` && pos8 === `X` || pos3 === `X` && pos6 === `X` && pos9 === `X` || pos1 === `X` && pos5 === `X` && pos9 === `X` || pos3 === `X` && pos5 === `X` && pos7 === `X`) {
        console.log(`Vencedor Dois`)
        resultado.innerText = `${jogadorUm}, você é o vencedor!`
        vencedorDois = true
        modalVencedor.style.display = `inline`
    }
    else if (pos1 === `O` && pos2 === `O` && pos3 === `O` || pos4 === `O` && pos5 === `O` && pos6 === `O` || pos7 === `O` && pos8 === `O` && pos9 === `O` || pos1 === `O` && pos4 === `O` && pos7 === `O` || pos2 === `O` && pos5 === `O` && pos8 === `O` || pos3 === `O` && pos6 === `O` && pos9 === `O` || pos1 === `O` && pos5 === `O` && pos9 === `O` || pos3 === `O` && pos5 === `O` && pos7 === `O`) {
        console.log(`Vencedor Um`)
        resultado.innerText = `${jogadorDois}, você é o vencedor!`
        vencedorUm = true
        modalVencedor.style.display = `inline`
    }else if( vencedorUm === false && vencedorDois === false && pos1 !== '' && pos2 !== '' && pos3 !== '' && pos4 !== '' && pos5 !== '' && pos6 !== '' && pos7 !== '' && pos8 !== '' && pos9 !== ''){
        resultado.innerText = `Temos um empate!`
        modalVencedor.style.display = `inline`
    }
}

botaoFechar.addEventListener(`click`, function(){
    modalVencedor.style.display = "none"
})

botaoReiniciar.addEventListener(`click`, function(){
    window.location.reload();
})