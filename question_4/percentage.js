/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
 */

const monthyInvoices = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "OTHERS": 19849.53,
}

const allValuesInvoices = Object.values(monthyInvoices).reduce((acc, currentlyValue) => acc + currentlyValue, 0);

for(const state in monthyInvoices) {
    const percentage = (monthyInvoices[state] / allValuesInvoices) * 100;
    console.log(`${state} teve um percentual de ${percentage.toFixed(2)}`);
}

