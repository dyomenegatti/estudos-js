console.log(`TRABALHANDO COM LOOPS`);

const listaDeDestinos = [
    'Salvador', 
    'São Paulo',
    'Rio de Janeiro'
];

const idadeComprador = 18;
const estaAcompanhado = false;
let passagemComprada = false;
const destino = 'Curitiba';

console.log(`\n Destinos possíveis: ${listaDeDestinos}`);

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true;
let contador = 0;
let destinoExiste = true;

while(contador < listaDeDestinos.length) {
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    } 
    contador += 1;
}

console.log("Destino existe: " + destinoExiste);

if(podeComprar) {
    console.log("Boa viagem!");
} else {
    console.log("Desculpe tivemos um erro.");
}