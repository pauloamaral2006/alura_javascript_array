const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

/* const meuSet = new Set([1, 1, 2, 2, 3, 3, 4, 4]);
console.log(meuSet); */
const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);
