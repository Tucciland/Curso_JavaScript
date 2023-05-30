/*
Calcule a porcentagem entre 2 numeros.
Exemplo: 25% de 10 é 40
*/

function calculaPorcentagem(total, saberporcentagem) {
    return ((saberporcentagem / total) * 100)
}

let total = prompt("Digite o valor total: ");
total = parseFloat(total);

let saberporcentagem = prompt("Digite o valor que quer saber a '%': ");
saberporcentagem = parseFloat(saberporcentagem);

calculaPorcentagem(total, saberporcentagem)

console.log(`O valor de ${saberporcentagem} e ${calculaPorcentagem(total, saberporcentagem).toFixed(2)}% de ${total}.`)

