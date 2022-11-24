/* Faça um programa que receba a quantidade de números e seus respectivos 
valores. Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:

        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 4
}*/
const numeros = [4, 100, 150, 90, 200];

let maiorNumero = 0;

for (let i = 0; i < numeros.length; i++) {
    const maiorNum = numeros[i];
    if (maiorNum > maiorNumero) {
        maiorNumero = maiorNum;
    } 
}
console.log(`Maior numero: ${maiorNumero}`);


let menorNumero = 300;

for (let i = 0; i < numeros.length; i++) {
    const menorNum = numeros[i];
    if (menorNum < menorNumero) {
        menorNumero = menorNum;
    }
}
console.log(`Menor numero: ${menorNumero}`);

