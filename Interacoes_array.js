let pessoas = [
    {nome:'Arthur', idade:22},
    {nome:'Maira', idade:21},
    {nome:'Sirlaine', idade:46},
    {nome:'Glaucio', idade:52},
    {nome:'Melissa', idade:4},
    {nome:'julia', idade:17},
    {nome:'Gabriel', idade:18}
]
console.log(`O tamanho do array original é ${pessoas.length}`)


//Usando array.filter
let maiordeidade = pessoas.filter((item) => {
    if (item.idade >= 18) {
        return true
    }
    else {
        return false
    }
})
console.log(maiordeidade)


//Usando array.every
let testaletraa = pessoas.every ((item) => {
    if (item.nome.toLowerCase().includes('a')) {
        return true
    }
    else {
        return false
    }
})
console.log(testaletraa)


//Usando array.some
let testenome = pessoas.some((item) => {
    if (item.idade < 3) {
        return true
    }
    else {
        return false
    }
})
console.log(testenome)