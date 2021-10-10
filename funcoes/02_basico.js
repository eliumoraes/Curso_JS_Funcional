function bomDia() {
    console.log('Bom dia!')
}

const boaTarde = function () {
    console.log('Boa tarde!!!!')
}

// (1) Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn == 'function'){
    fn()
    }
}

executarQualquerCoisa(3)

executarQualquerCoisa(bomDia)

executarQualquerCoisa(boaTarde)

// 1 == '1'  --> Verdadeiro, compara apenas valores
// 1 === '1'  --> Falso, compara valores e tipos

// (2) Retornar uma função a partir de uma outra função

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)

// Nome da variável não pode começar com número
const bits8 = potenciaDe2(8)
console.log(bits8)

console.log('Dois ao cubo: ', potencia(2)(3))

// Ou jogando em uma variável:
const doisAoCubo = 'Dois ao cubo: ' + potencia(2)(3)
console.log(doisAoCubo)

// Uma função somar que recebe (3)(4)(5)
// Somar usando essa estratégia
function somarTres(a){
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(somarTres(1)(2)(3))
// ------------- FIM ----------------------------------------------------


// Uma função calcular(3)(7)(fn)
// Onde fn deve utilizar o 3 e 7 para o resultado
// Passar em fn uma função somar, uma multiplicar, etc.

function calcular(a){
    return (b) => {
        return (fn) => {
            return fn(a, b)
        }
    }
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

const r1 = calcular(10)(2)(subtrair)
console.log(r1)

const r2 = calcular(10)(2)(multiplicar)
console.log(r2)