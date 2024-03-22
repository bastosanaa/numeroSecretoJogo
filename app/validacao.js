function verificaChute(chute) {
    const numero = +chute;

    if (verificaSeChuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido: seu palpite deve ser um número</div>'
    };

    if (verificaSeChuteDentroDoLimite(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: seu palpite deve estar entre ${menorValor} e ${maiorValor}</div>`
    };

    if (numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era: ${numeroSecreto}</h3>

        <button class="btn-jogar" id="jogar-novamente">Jogar Novamente</button>
        `
    } else if (numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up" id="icone"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down" id="icone"></i></div>`
    }

}

function verificaSeChuteInvalido(numero){
    return Number.isNaN(numero)
};

function verificaSeChuteDentroDoLimite(numero){
    return numero > maiorValor || numero < menorValor
};

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})