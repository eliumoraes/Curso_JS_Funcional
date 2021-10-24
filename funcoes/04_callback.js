const exec = (fn, a, b) => fn(a, b);

const somarNoTerminal = (a, b) => console.log(a + b);
const subtrairNoTerminal = (a, b) => console.log(a - b);

exec(somarNoTerminal, 56, 38);
exec(subtrairNoTerminal, 182, 27);

// Callback: Aconteceu um evento,
// Quando esse evento aconteceu: Uma função é chamada
// Ou:
// Passar uma função como parâmetro pra outra função
// Depois essa função é chamada de volta
// Ou:
// Faz uma requisição para o servidor
// Faz uma chamada http
// Quando chegar a resposta: uma callback é chamada

const subtrair = (x, y) => x - y;
const resposta = subtrair(50, 24);

console.log(resposta);

// setInterval fica executando de forma repetida
const cb = () => console.log("Exec...");
setInterval(cb, 1000);

arr1 = [2, 4, 5]
arr2 = [2, 4, 7]

// Procurando um único número:
// console.log(arr1.some(x => x === 2))

const confere = (a, b) => {
    c = []
    for (let num = 0; num < a.length; num++) {
        console.log(a[num])
        if(b.some(x => x === a[num])){
            c.push(a[num])
        }
    }
    return c     
}

// Preenchendo uma array com os números da primeira encontrados na segunda:
const arr3 = confere(arr1, arr2)
console.log(arr3)

let somaArray = 0;

arr3.forEach(x => {somaArray += x} )
console.log(somaArray)