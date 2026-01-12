//pega o id do produto na URL//
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));


//buscar o produto//
const product = products.find(p => p.id === productId)

//preenche a pagina//

