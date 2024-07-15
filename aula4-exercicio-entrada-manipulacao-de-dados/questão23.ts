// 23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de sua escolha).
let cidade = prompt(`Digite o nome da cidade: `);

if (cidade?.charAt(0).toUpperCase() === "S"){
    alert(`A sua cidade começa com a letra "S"!`);
}else{
    alert(`A sua cidade não começa com a letra "S"`);
}