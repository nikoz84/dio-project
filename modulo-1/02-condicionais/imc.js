
const peso = 110
const altura = 1.65


const imc = (peso / (altura * altura)).toFixed(2)

if (imc < 18.5) {
    console.log(`ICM - ${imc} Abaixo do peso`)
} else if (imc >= 18.5 && imc <= 25) {
    console.log(`ICM - ${imc} Peso ideal`)
} else if (imc >= 25 && imc <= 30) {
    console.log(`ICM - ${imc} Sobrepeso`)
} else if (imc >= 30 && imc <= 40) {    
    console.log(`ICM - ${imc} Obesidade`)
} else {
    console.log(`IMC - ${imc} Obesidade grave`)
}