console.log(`TRABALHANDO COM CONDICIONAIS`);

const listaDeDestinos = [
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'
];

const idadeComprador = 18;
const estaAcompanhado = false;
const passagemComprada = true;

console.log(`Destinos possíveis: ${listaDeDestinos}`);

// if(idadeComprador >= 18) {
//     console.log(`Compra efetuada - ${listaDeDestinos}`);
//     listaDeDestinos.splice(1,1);
// } else if(estaAcompanhado) {
//     console.log(`Compra efetuada - ${listaDeDestinos}`);
//     listaDeDestinos.splice(1,1);
// } else {
//     console.log(`Compra não efetuada, comprador deve ter +18 - ${listaDeDestinos}`);
// }

// Operadores lógicos encadeados
if(idadeComprador >= 18 || estaAcompanhado == true) {
    console.log(`Compra efetuada - ${listaDeDestinos}`);
    listaDeDestinos.splice(1,1);
} else {
    console.log(`Compra não efetuada, comprador deve ter +18 - ${listaDeDestinos}`);
}

if(idadeComprador >= 18 && passagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Não pode embarcar!");
}


