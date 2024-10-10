const stringToInvert = prompt("Digite uma palavra: ");

function invertString(string) {
    if(!isNaN(string)) {
        return alert("Por favor, insira uma palavra.");
    } else {
        let invertedArray = [];
    
    for ( let i = string.length - 1; i >= 0; i--) {
        invertedArray.push(string[i])
    }

    return invertedArray.join('');
    }    
}

alert(invertString(stringToInvert));
