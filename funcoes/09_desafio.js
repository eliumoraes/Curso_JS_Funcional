const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

// Usar filter, map, reduce

// 1. Fragil: true
// 2. Quantidade * Preço --> Total
// 3. Média totais dentro da função

isFragil = (item) => item.fragil;
produtosFrageis = carrinho.filter(isFragil);
console.log(produtosFrageis, "\n");

precoTotal = (item) => item.qtde * item.preco;
totalPorItens = produtosFrageis.map(precoTotal);
console.log(totalPorItens, "\n");

const mediaFinal = totalPorItens.reduce(
  (acumulador, elemento, i, array) => {
    console.log("i: ", i);
    console.log("array: ", array);
    const newQtd = acumulador.qtde + 1;
    const newTot = acumulador.total + elemento;
    const newMed = newTot / newQtd;

    console.log("Acumulador anterior\n", acumulador);
    const newAcumulador = {
      qtde: newQtd,
      total: newTot,
      media: newMed,
    };

    console.log("\nAcumulador atual\n", newAcumulador, "\n\n");

    return newAcumulador;
  },
  { qtde: 0, total: 0, media: 0 }
);

console.log("Media final: ", mediaFinal);

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
      continue;
    }

    acc = fn(acc, this[i], i, this);
  }

  return acc;
};
const somar = (acumulador, elemento) => acumulador + elemento

// Faz o total geral utilizando o próprio reduce
const reduceProprio = totalPorItens.meuReduce(somar)

const reducePadrao = totalPorItens.reduce(somar)

console.log(reduceProprio)
console.log(reducePadrao)
