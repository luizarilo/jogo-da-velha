const botaoIniciar = document.getElementById(`btn-game`)
const alerta = document.getElementById(`alert`)
let jogadorDois = document.getElementById(`jogador-dois`)
let jogadorUm = document.getElementById(`jogador-um`)
botaoIniciar.addEventListener(`click`, function () {
    jogadorUm = document.getElementById(`jogador-um`).value
    jogadorDois = document.getElementById(`jogador-dois`).value

    if (jogadorDois === `` || jogadorUm === ``) {
        verificarNome()
    } else {
        localStorage.setItem(`jogadorUm`, jogadorUm)
        localStorage.setItem(`jogadorDois`, jogadorDois)
        window.location.href = `game.html`
    }


})

function verificarNome(){
    alerta.style.display = `inline`
    
}

jogadorDois.addEventListener(`focus`,function(){
    alerta.style.display = `none`

})

jogadorDois.addEventListener(`focus`,function(){
    alerta.style.display = `none`
})