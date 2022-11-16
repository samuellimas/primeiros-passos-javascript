/*function escrevaMeuNome(nome) {
    console.log(`Meu nome é ${nome}`);
}

escrevaMeuNome('Samuel');
*/

function verificarIdade(idade) {
    if (idade < 18) {
        console.log('Voce é menor de Idade!');
    } else if (idade >= 65) {
        console.log('Voce é Idoso!');
    } else {
        console.log('Voce é Maior de Idade!');
    }
}
verificarIdade(70);