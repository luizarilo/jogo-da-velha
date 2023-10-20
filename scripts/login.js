const botaoIniciar = document.getElementById(`btn-game`)

botaoIniciar.addEventListener(`click`, function(){
    const jogadorUm = document.getElementById(`jogador-um`).value
    const jogadorDois = document.getElementById(`jogador-dois`).value

    localStorage.setItem(`jogadorUm`, JSON.stringify(jogadorUm))
    localStorage.setItem(`jogadorDois`, JSON.stringify(jogadorDois))

    window.location.href = `index.html`

    console.log(jogadorDois);
    console.log(jogadorUm)
})