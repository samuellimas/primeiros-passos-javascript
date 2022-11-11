

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaemKM = 1580;

const litrosConsumidos = distanciaemKM / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
