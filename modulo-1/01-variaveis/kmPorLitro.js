const precoCombustivel = 5.89
const kmPorLitro = 12
const distanciaEmKm = 100

const litrosConsumidos = distanciaEmKm / kmPorLitro
const valorGasto = litrosConsumidos * precoCombustivel

console.log(valorGasto.toFixed(2))