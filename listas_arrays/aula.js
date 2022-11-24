
/*for (let index = 0; index < array.length; index++) {
   // const element = array[index];
    
}
    

const nome = 'Novaes Machado';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}*/

const notas = [];

notas.push(6);
notas.push(7);
notas.push(8);
notas.push(6);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);