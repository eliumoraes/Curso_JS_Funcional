let a = 4
console.log(a)

// Function Declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

// Function expression
const boaTarde = () => {
    console.log('Boa tarde!')
}

boaTarde()

let x = boaTarde() // undefined

function somar(a, b) {
    return 'Resultado: ' + (a + b)
}

const resultado = somar(3, 4)
console.log(resultado)

// Javascript não reclama caso passe parâmetros adicionais
// Ignora-os
const resultadoDois = somar(1, 2, 3, 4)
console.log(resultadoDois)

// Pode passar menor quantidade de parâmetros
// Resultado: Not a Number
// Porque o segundo parâmetro está recebendo 'undefined'
const resultadoTres = somar(1)
console.log(resultadoTres)

// Posso ainda definir um valor padrão
// No exemplo b irá receber 0 caso não passar valores
function outroSomar(a, b = 0) {
    return 'Resultado: ' + (a + b)
}

const resultadoQuatro = outroSomar(1)
console.log(resultadoQuatro)