console.clear()
// Leitura de arquivo
const fs = require("fs");
const path = require("path");

// Passar para a promise um caminho
// Receber o conteúdo do arquivo no resultado

const conteudoDoArquivo = (caminho) => {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString());
    });
      
      console.log("Depois de ler")
  });
};

const caminhoDoArquivo = path.join(__dirname, "05_dados.txt");

conteudoDoArquivo(caminhoDoArquivo)
    .then(conteudo => conteudo.split('\r\n'))
    .then(linhas => linhas.join(", "))
    .then(conteudo => `O valor final é: ${conteudo}.`)
    .then(console.log)
