/*
Criar uma função para fazer uma validação basica de usuario
*/

function validaLogIn(usuario, senha) {
    if (usuario === "Arthur" && senha === 123) {
        return true
    }else {
        return false
    }
}

let usuario = prompt("Digite seu usuario: ")

let senha = prompt("DIgite sua senha: ")
senha=parseFloat(senha)

console.log(validaLogIn(usuario, senha) ? "Acesso concedido!" : "Acesso negado!")