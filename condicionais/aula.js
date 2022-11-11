

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distaciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litroConsumidos = distaciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litroConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}else {
    const valorGasto = litroConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
}
