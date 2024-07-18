


async function fetchProduto(url){
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    return response
}

fetchProduto('https://pokeapi.co/api/v2/pokemon/ditto')