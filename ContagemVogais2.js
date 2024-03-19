//Lógica Escrita-----------------------------------------

// 1. ler texto
// 2. transformar todas os caractéres em caractéres minúsculas
// 3. separar cada letra do texto utilizando ""
// 4. filtrar as caractéres "a", "e", "i", "o", "u" (vogais) que estão incluídas dentro do let separar
// 5. exiba o texto mínusculo
// 6. exiba quais vogais tem, separadas por ", "
// 7.exiba número de vogais


//Lógica Programada-----------------------------------------
let texto = "Amo Desenvolvimento de Sistemas";

let textoMinusculo = texto.toLowerCase();

let separar = textoMinusculo.split("");

let vogais = separar.filter((separar) => ["a", "e", "i", "o", "u"].includes(separar));

let ordem = vogais.reverse();

console.log(`Texto: ${textoMinusculo}.`)

console.log(`Quais vogais tem: ${ordem.join(", ")}.`);

console.log(`Número de vogais: ${vogais.length}.`);