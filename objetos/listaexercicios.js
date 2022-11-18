
/* 1- Crie uma classe  para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de com
bustível por Kilometro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível
nos de um valor de gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;


    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastodePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastodePercurso(70, 5));

const palio = new Carro('fiat', 'Preto', 1 / 10);
console.log(palio.calcularGastodePercurso(70, 5));

