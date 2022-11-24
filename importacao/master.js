

const {gets, print} = require('./funcoes-auxiliares');

/* 
Uma sala contem 5 alunos e para os alunos foi sorteado os números
1 - 100.
Faça um programa que receba os 5 números sorteados para os 
alunos e mostre o maior número sorteado.

5
50
10
98
23
*/

/*const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);
const numerosSorteados = [];

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
    
}

print(maiorValor);  */ 

//Outra Forma Abaixo simplificando o codigo. mais só vai mostrar o maior valor 


let maiorValorEncontrado = 0;

for (let i = 0; i < 11; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}
print(maiorValorEncontrado);
