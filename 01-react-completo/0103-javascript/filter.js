const precos = [


]

const precosFiltro = orecis.filter(function (preco){
    console.log(preco.includes('R$'))
})


const precosFiltro2 = precos.filter((p) => p.includes('R$'))

console.log(precosFiltro)