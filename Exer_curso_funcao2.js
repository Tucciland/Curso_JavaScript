/*
Crie uma função para calcular preço do imovel.
o preço do imovel se da por o preço do metro quadrado 
multiplicado pelo numero de quartos.
- O preço do metro quadrado é 3000 reais.
- Para um quarto não há acrescimo. 
- Para dois quartos o acrescimo é de 20%
- Para tres quartos o acrescimo é de 50%
*/

function calculaPrecoImovel(metragem, nquartos) {
    let m2 = 3000
    
    switch (nquartos) {
        case 1:
            return (metragem * m2)
            break;
    
        case 2:
            return ((metragem * m2) * 1.2)
            break

        case 3:
            return ((metragem * m2) * 1.5)
    }
}

let metragem = prompt("digite a metragem do imovel: ")
metragem = parseFloat(metragem)

let quartos = prompt("Quantos quartos ?: ")
quartos = parseFloat(quartos)

let precomimovel = calculaPrecoImovel(metragem, quartos)
precomimovel = parseFloat(precomimovel)

console.log(`O valor do imovel de ${metragem} metros quadrados e ${quartos} quartos está por R$ ${precomimovel} nesse condominio.`)