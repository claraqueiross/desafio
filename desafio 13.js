var jogahtml = window.document.getElementById('saida')

function clique1() {
    jogahtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = botão 1 </p>'
}

function clique2() {
    jogahtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = botão 2 </p>'
}

function clique3() {
    jogahtml.innerHTML += '<p> Você Clicou escolheu a primeira opção = botão 3</p>'
}

function parimpar() {
    let num = Number(window.prompt('Digite um número: '))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>ÍMPAR</strong>'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O número digitado foi ${num} e ele é: ${tipo}!</p>`
}