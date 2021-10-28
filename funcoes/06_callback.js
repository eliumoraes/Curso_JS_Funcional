const nums = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;
// const usandoTodosOsParams = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));

const nomes = ["Eliu", "Marta", "Eliseu", "Thays", "Nanão", "Manu", "Arthur"];
const primeiraLetra = (texto) => texto[0];
const letras = nomes.map(primeiraLetra);

console.log(nomes, letras);

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

// Desafio:
// Criar duas funções que vão mapear
// Um array só com os nomes
// Um array multiplicando a quantidade pelo preço

const produtoNome = (x) => x.nome;
const precoQuantidade = (x) => x.qtde * x.preco;

const produtosCarrinho = carrinho.map(produtoNome);
const precoPorProduto = carrinho.map(precoQuantidade);

console.log("Produtos no carrinho:\n", produtosCarrinho, "\n");
console.log("Preço a pagar por produto:\n", precoPorProduto, "\n");

// Resolução do professor:
console.log("Resolução do professor:")
const getNome = (item) => item.nome;
console.log(carrinho.map(getNome));

const getTotal = (item) => item.qtde * item.preco;
console.log(carrinho.map(getTotal));
