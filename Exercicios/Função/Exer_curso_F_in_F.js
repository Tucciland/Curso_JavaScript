/*
Exercicio sobre criar funções dentro de funções

Criar uma função para calcular a raiz de um numero 
e de somar essas raizes
*/

function somaQuadrado(q1, q2) {
    function calculaQuadrado(q) {
        return q * q
    }

    q1 = calculaQuadrado(q1)
    q2 = calculaQuadrado(q2)

    return q1 + q2
}

let x = 2, y = 3

console.log(somaQuadrado(x, y))