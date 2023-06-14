let pessoa = {
    nome: 'Arthur',
    idade: 22,
    carros: [
        {modelo:'Peugeot', cor:'prata'},
        {modelo:'Renout', cor:'branco'}
    ],
    trabalho:'Dev',
    salario: 3000.00
}

console.log(pessoa)

let novocarro = {modelo:null, cor:null}

novocarro.modelo = prompt("Modelo do carro: ")
novocarro.cor = prompt("Cor do carro: ")

pessoa.carros.push(novocarro)

pessoa.salario = prompt('Atualize o seu salario: ')
pessoa.salario = parseFloat (pessoa.salario)

console.log(pessoa)