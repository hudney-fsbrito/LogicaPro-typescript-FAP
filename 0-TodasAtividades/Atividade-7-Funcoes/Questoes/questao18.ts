/* Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a
"margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve
calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao
custo acrescido da margem de lucro e do valor do frete. */
type Produto = {
    valor: number,
    margemLucro: number,
    frete: number,
}



export function addProduto(){
    let produtoArr: Produto[] = []
    let valor = parseFloat(prompt(`Digie o valor de custo do produto`)!)
    let margemLucro = parseFloat(prompt(`
        Digie margem de lucro do produto
        Ex.: 10 para 10%
        `)!)
    let frete = parseFloat(prompt(`Digie qual o frete do produto`)!)
    const produto: Produto = {
        valor: valor,
        margemLucro: margemLucro,
        frete: frete
    }
    return produto
}

export function calcularPrecoProduto(produto:Produto) {
    let margem = produto.margemLucro / 100
    let valorMargem = produto.valor * margem
    let preco = produto.valor + valorMargem + produto.frete;
    let precoEmReal;
    console.log(`Margem ${margem}`);
    console.log(`Valor da Margem ${valorMargem}`);
    
    return precoEmReal = new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL",
      }).format(preco)
}