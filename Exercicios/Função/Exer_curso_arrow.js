/*
Tarnsformar alguma função ja feita em uma arrow function

NORMAL

function calculaIdade(anonascimento) {
    let anoatual= 2023

    return anoatual - anonascimento
}

*/

const calculaIdade = (anonascimento, anoatual) => {
    return anoatual - anonascimento
}

console.log(calculaIdade(2000, 2023))