/*2) Crie um programa que seja capaz de percorrer uma lista de 
números e imprima cada número Par encontrado.*/

const numeros = [7, 12, 23, 44, 55, 26, 17, 08, 69, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero)
        
    }

}

