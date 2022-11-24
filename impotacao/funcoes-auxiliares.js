
const entradas = [5, 10, 15, 20, 32, 55, 66, 78, 85, 93, 45]; // aumentei a quantidade de alunos para teste
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};


