function uneNomes(n1, n2) {
    return `${n1} ${n2}`
}

function calculaIdade(anonascimento) {
    let anoatual= 2023

    return anoatual - anonascimento
}

function verificaMaioridade(idade) {
    if (idade >= 18) {
        return true
    }else{
        return false
    }
}

let nome = prompt("Digite seu nome: ")

let sobrenome = prompt("Digite seu sobrenome: ")

let anonascimento = prompt("Digite o ano de seu nascimento: ");
x = parseInt(anonascimento);

let nomecompleto = uneNomes(nome, sobrenome)

let idade = calculaIdade(anonascimento)

let maoridade = verificaMaioridade(idade) ? "SIM e maior de idade." : "NAO e maior de idade."

console.log(`Olá  ${nomecompleto} você terá ${idade} anos ate o final desse ano logo voce ${maoridade}`)
