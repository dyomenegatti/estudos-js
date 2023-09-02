// Conversão Implícita
const numero = 456;
const numeroString = '456';

console.log(numero === numeroString);
console.log(numero == numeroString);
console.log(numero + numeroString);

// Conversão Explícita
// Number() -> transformar String em Número
// String() -> transformar Número em String

console.log(numero + Number(numeroString));
console.log(String(numero) + numeroString);
