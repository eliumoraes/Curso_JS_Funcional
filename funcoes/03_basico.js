// arrow function

const felizAniversario = () => {
    console.log('Feliz aniversário')
}

felizAniversario()

// Função sem corpo é uma única expressão
// Sempre retorna o resultado dessa expressão
const saudacao = (nome) => 'Olá ' + nome
console.log(saudacao('Eliu'))

// Se há um único parâmetro pode-se remover os ()
const saudacao2 = nome => 'A paz de Deus ' + nome
console.log(saudacao2('Eliu'))

// Pode-se utilizar o símbolo da crase com interpolação
const saudacao3 = nome => `Fala ${nome}! Beleza?`
console.log(saudacao3('Eliu'))

// Sempre que há corpo {} é necessário 
// Explicitar o return se quiser retornar algo
const somar = (numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n        
    }
    return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Posso ainda passar uma 
// Quantidade de parâmetros variáveis usando três pontos

const listar = (...valores) => {
    console.log('É array? ', Array.isArray(valores))
    lista = ''
    for (let x = 0; x < valores.length; x++) {
        if (valores[x] === valores[valores.length -1]) {
            lista += valores[x] + '.'
        } else {
            lista += valores[x] + ', '
        }
    }
    return lista
}

console.log(listar(1, 2, 3, 5))
console.log(listar('A', 'B', 'C'))

// Lembrar que se utilizar o arrow não precisa da
// palavra function. O contrário também é valido.

// O this não pode ser utilizado em arrow function
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

Array.prototype.primeiro = () => console.log(this[0])

const listaNumeros = [1, 2, 3, 4, 5]
listaNumeros.ultimo()
listaNumeros.primeiro()

// Sem nenhum parâmetro posso tirar os parênteses
// Quando é variável posso usar o ...
// Ou colocar a quantidade de params entre parênteses