const apresentar = nome => `Meu nome é ${nome}.`;
console.log(apresentar('Dyovana'));

const soma = (num1, num2) => num1 + num2;
console.log(soma(1,2));

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9";
    } else {
        return num1 + num2;
    }
};
console.log(somaNumerosPequenos(1,2));
console.log(somaNumerosPequenos(11,12));