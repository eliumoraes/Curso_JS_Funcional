// Leitura de arquivo
const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "05_dados.txt");

function exibirConteudo(_, conteudo) {
  console.log("Usando function: ");
  console.log(conteudo.toString());
}

fs.readFile(caminho, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => {
  console.log("Usando arrow function: ");
  console.log(conteudo.toString());
});

console.log("Início sync: ");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim sync...");

// No modo síncrono para a execução e espera o resultado antes de seguir
