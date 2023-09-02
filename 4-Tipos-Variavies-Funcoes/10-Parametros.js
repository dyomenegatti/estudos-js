function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2,2));

//Ordem dos parâmetros
function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha é ${idade}`;
}

console.log(nomeIdade('Dyovana', 26));
console.log(nomeIdade(26, 'Dyovana'));

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(4,5), soma(3, 3)));
console.log(multiplica(soma(4,5)));