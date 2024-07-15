// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.
let date = prompt(`Digite uma data no formato "dd/mm/aaaa"`);

if (date !== null){
    let partes = date.split('/');

    let dia: number = parseInt(partes[0]);
    let mes: number = parseInt(partes[1]);
    let ano1: number = parseInt(partes[2]);

    alert(`Dia: ${dia} \n Mês: ${mes} \n Ano: ${ano1}`);
    }else{
        alert("Nenhuma data foi inserida.");
}