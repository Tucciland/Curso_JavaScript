function somar(n1,n2) {
    let resultado_soma = n1+n2
    console.log(`A soma de ${n1} + ${n2} e ${resultado_soma}`)
}

let x = prompt("Digite o primeiro numero: ");
x = parseInt(x);
let y = prompt("Digite o segundoo numero: ");
y = parseInt(y);

somar(x, y)