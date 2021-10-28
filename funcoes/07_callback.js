const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

let totalItens = 0;
const qtdMaiorQueZero = (item) => {
  totalItens += item.qtde;
  return item.qtde > 0;
};

const getNome = (item) => item.nome;
const qtdeMuitoGrande = (item) => item.qtde > 1000;

const itensValidos = carrinho.filter(qtdMaiorQueZero).map(getNome);

console.log(itensValidos);
console.log(totalItens);


