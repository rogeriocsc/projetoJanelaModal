let fundoJanela = document.getElementById('fundo')
let janelaModal = document.getElementById('jan')

function abrirJanela() {
    fundoJanela.style.display = 'block'
    janelaModal.style.display = 'block'
}

function fecharJanela() {
    fundoJanela.style.display = 'none'
    janelaModal.style.display = 'none'
}