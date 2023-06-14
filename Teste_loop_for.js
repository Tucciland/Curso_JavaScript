let pessoas = [
    {nome:'Arthur', idade:23, cor:'Verde'},
    {nome:'Glaucio', idade:52, cor:'Azul'},
    {nome:'Sirlaine', idade:48, cor:'Roxo'}
];

for (let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade}
    anos e sua cor favorita é ${pessoas[i].cor}`)   
}

for (let i in pessoas) {
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade}
    anos e sua cor favorita é ${pessoas[i].cor}`)
}

for (const i of pessoas) {
    console.log(`${i.nome} tem ${i.idade} 
    anos e sua cor favorita é ${i.cor}`)
}