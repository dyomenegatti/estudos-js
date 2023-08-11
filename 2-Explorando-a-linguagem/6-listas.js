console.log(`TRABALHANDO COM LISTAS`);

const listaDeDestinos = [
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'
];

console.log(listaDeDestinos);
console.log(listaDeDestinos[0]);

//Adicionando novos dados no array = push
listaDeDestinos.push(`Bahia`);
console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);

//Removendo dados do array = splice
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);