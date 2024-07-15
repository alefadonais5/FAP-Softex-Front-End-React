// 31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto, adicionando o símbolo de moeda da sua escolha.
let produto = prompt(`Qual o nome do produto? `);
let preco = Number(prompt(`Qual o valor do produto? `)); 
let simboloMoeda = prompt(`Qualo o símbolo da moeda? `)
alert(`${produto}: ${simboloMoeda} ${preco}`);