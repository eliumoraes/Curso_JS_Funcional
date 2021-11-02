// Promisse é algo que vou resolver no futuro

// Variável posso criar e consumir logo em seguida
let a = 1
console.log(a)

// Promisse é uma function
console.log(typeof Promise)

let x = new Promise(function (cumprirPromessa) {
    cumprirPromessa({a:3, b: 4})
})

console.log(typeof x)

// Para acessar o resultado preciso usar o método then
// O método then recebe uma função como parâmetro

x.then(
    function (valorDevolvidoAoCumprirPromessa) {
        console.log(valorDevolvidoAoCumprirPromessa)
    }
)



function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

// Uma Promise recebe uma função como parâmetro
let p = new Promise(
    function(resolve) {
        resolve(['Maria', 'Marta', 'Eliseu', 'Moraes'])
    }
)

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

