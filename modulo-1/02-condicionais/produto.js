const precoProduto = 100
const formaPagamento = 4

if(formaPagamento === 1) {
    console.log(precoProduto - precoProduto * 0.1)
} else if(formaPagamento === 2) {
    console.log(precoProduto - precoProduto * 0.15)
} else if(formaPagamento === 3) {
    console.log(precoProduto)
} else if(formaPagamento === 4) {
    console.log(precoProduto + (precoProduto * 0.1))
}