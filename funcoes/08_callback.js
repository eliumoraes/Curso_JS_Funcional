const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

totalPorItem = carrinho.map(item => item.qtde * item.preco)
console.log(totalPorItem, "\n")

const somar = (acumulador, elemento) => {
    const soma = acumulador + elemento
    console.log(acumulador, " + ", elemento, " = ", soma)
    return soma
}

const totalGeral = totalPorItem.reduce(somar)
console.log("----------------");
console.log(totalGeral)

// Eu posso começar passando um valor inicial 
// no elemento da função somar

