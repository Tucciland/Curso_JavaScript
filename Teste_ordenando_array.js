let listapessoas = [
    {nome:'Arthur', idade:22},
    {nome:'Sirlaine', idade:46},
    {nome:"Glaucio", idade:52},
    {nome:'Maira', idade:21}
]

let listafrutas = ['banana', 'abacate', 'damasco', 'cereja']

console.log(listapessoas)
console.log(listafrutas)

listafrutas.sort()
listapessoas.sort()

console.log(listapessoas)
console.log(listafrutas)

listapessoas.sort((primeiro, segundo) => {
    return primeiro.idade - segundo.idade
})

console.log(listapessoas)