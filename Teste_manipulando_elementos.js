function clicou() {
    console.log(teste.children)
}

function alteravalor() {
    teste.children[0].children[0].innerHTML += "ITEM ALTERADO"
    console.log(teste)
}
function alteravalor2() {
    teste.children[0].children[0].innerHTML = "Algum item"
    console.log(teste)
}
function alteravalor3() {
    teste2.outerHTML = "<ul><li>alterado</li><li>alterado</li></ul>"
    console.log(teste)
}

//Armazenando o elemento do elemento de id=teste na variavel teste
//e colocando para exibir apertando o botão
let teste = document.querySelector("#teste")

let teste2 = document.querySelector("#teste2")

let bt = document.querySelector(".botao1")
bt.addEventListener("click", clicou)

let bt2 = document.querySelector(".botao2")
bt2.addEventListener("click", alteravalor)

let bt3 = document.querySelector(".botao3")
bt3.addEventListener("click", alteravalor2)

let bt4 = document.querySelector(".botao4")
bt4.addEventListener("click", alteravalor3)
