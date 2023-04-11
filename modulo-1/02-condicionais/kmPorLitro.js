const precoEtanol = 4.89
const precoGasolina = 5.79
const tipoCombustivel = ''
const kmPorLitro = 12
const distanciaEmKm = 100


const litrosConsumidos = distanciaEmKm / kmPorLitro


if(tipoCombustivel === 'etanol'){
    const valorGasto = litrosConsumidos * precoEtanol
    console.log(`$R ${valorGasto.toFixed(2)}`)
} else {
    const valorGasto = litrosConsumidos * precoGasolina
    console.log(`$R ${valorGasto.toFixed(2)}`)
}



