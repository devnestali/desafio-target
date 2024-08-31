/* Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a 
quantidade de vezes em que ela ocorre. */

const userString = prompt("Digite uma palavra ou frase: ");

  let letters = userString.split("");

  let lettersA = 0;

  for(let i = 0; i < letters.length; i++) {
    if(letters[i].toLowerCase() === "a") {
      lettersA++
    }
  }