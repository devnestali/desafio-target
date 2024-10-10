/* Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 
1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de 
Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. */

function isPerfectSquare(x) {
  let y = Math.floor(Math.sqrt(x));
  return ((y * y) === x);
}

function isFibonacci(number) {
  return isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4) 
}

const userNumber = prompt("Digite um número inteiro: ");

if (isFibonacci(userNumber)) {
  alert(`${userNumber} pertence à sequência de Fibonacci.`);
} else {
  alert(`${userNumber} não pertence à sequência de Fibonacci.`);
}