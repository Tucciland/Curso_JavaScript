function clicou() {
    console.log(procura.children)
}

function modTitulo() {

    inptexto = prompt("Digite o texto a ser substituido no titulo da pagina: ");

    procura = document.querySelector("#titulo")

    procura.innerHTML = inptexto
}

function resetTitulo() {
    document.querySelector("#titulo").innerHTML = 'Titulo da Pagina'
}


function modLinha1() {

    inptexto = prompt("Digite o texto a ser substituido na primeira linha: ");

    procura = document.querySelector("#linhas")

    procura.children[0].children[0].innerHTML = inptexto
}

function resetLinha1() {
    procura.children[0].children[0].innerHTML = '<li>Primeira linha</li>'
}

function modlinha2() {

    inptexto = prompt("Digite o texto a ser substituido na segunda linha: ");

    procura = document.querySelector("#linhas")

    procura.children[0].children[1].innerHTML = inptexto
}

function resetLinha2() {
    procura.children[0].children[1].innerHTML = '<li>Segunda linha</li>'
}

function modNegrito() {

    inptexto = prompt("Digite o texto a ser substituido no texto em negrito: ");

    procura = document.querySelector("#negrito")

    procura.innerHTML = inptexto
}

function resetNegrito() {
    document.querySelector("#negrito").innerHTML = 'TEXTO EM NEGRITO'
}

let inptexto, procura

//prompt("Digite o primeiro numero: ");
//textoaalterar = parseInt(x);

//let teste = document.querySelector("#teste")

let alttitulo = document.querySelector(".alteratitulo")
alttitulo.addEventListener("click", modTitulo)

let rsttitulo = document.querySelector(".resetatitulo")
rsttitulo.addEventListener("click", resetTitulo)

let alt1 = document.querySelector(".alteraprimeiralinha")
alt1.addEventListener("click", modLinha1)

let rst1 = document.querySelector(".resetaprimeiralinha")
rst1.addEventListener("click", resetLinha1)

let alt2 = document.querySelector(".alterasegundalinha")
alt2.addEventListener("click", modlinha2)

let rst2 = document.querySelector(".resetasegundalinha")
rst2.addEventListener("click", resetLinha2)

let altnegrito = document.querySelector(".alteranegrito")
altnegrito.addEventListener("click", modNegrito)

let rstnegrito = document.querySelector(".resetanegrito")
rstnegrito.addEventListener("click", resetNegrito)
