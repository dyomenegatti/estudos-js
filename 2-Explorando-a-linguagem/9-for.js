console.log(`TRABALHANDO COM LOOPS`);

const listaDeDestinos = [
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'
];

const idadeComprador = 13;
const estaAcompanhado = false;
let passagemComprada = false;
const destino = 'Curitiba';

console.log(`\n Destinos possíveis: ${listaDeDestinos}`);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;
let destinoExiste = true;

for(let i = 0; i < listaDeDestinos.length; i++) {
    if(listaDeDestinos[i] == destino) {
        destinoExiste = true;
        break;
    } 
}

console.log("Destino existe: " + destinoExiste);

if(podeComprar) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe tivemos um erro.");
}
