let pessoa = {
    nome: 'Arthur',
    sobrenome: 'Targaryen',
    salario: 3000.00,
    nomecompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    },
    mae:'Sirlaine',
    pai:'Glaucio'
}

console.log(`Eu me chamdo ${pessoa.nomecompleto()} sou filho de ${pessoa.pai} ${pessoa.sobrenome} e ${pessoa.mae} ${pessoa.sobrenome}`)
