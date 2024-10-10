/* Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 */

const invoicing = [
  { "day": 1, "value": 1000 },
  { "day": 2, "value": 2000 },
  { "day": 3, "value": 3000 },
  { "day": 4, "value": 4000 },
  { "day": 5, "value": 5000 },
  { "day": 6, "value": 0 },
  { "day": 7, "value": 0 },
]

const validInvoicing = invoicing.filter(dailyInvoicing => dailyInvoicing.value !== 0).map(day => day.value);
const sum = validInvoicing.reduce((acc, currentlyValue) => acc + currentlyValue, 0);

let lowestValue = validInvoicing[0];
let highestValue = validInvoicing[0];
let daysAboveAverage = 0;

for(let i = 0; i < validInvoicing.length; i++) {
  if(lowestValue > validInvoicing[i]) {
    lowestValue = validInvoicing[i];
  } else if (highestValue < validInvoicing[i]) {
    highestValue = validInvoicing[i];
  };
};

const monthyAverage = sum / validInvoicing.length;

for(let i = 0; i < validInvoicing.length; i++) {
  if(validInvoicing[i] > monthyAverage) {
    daysAboveAverage++;
  };
};



console.log(`
  O menor valor de faturamento foi de ${lowestValue},
  O maior valor de faturamento foi de ${highestValue},
  O número de dias em que o valor de faturamento diário foi superior à média mensal foi ${daysAboveAverage}.
  `);