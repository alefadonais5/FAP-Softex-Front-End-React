enum TipoPagamento1 {
  PIX = 1,
  Débito = 2,
  Crédito = 3,
  Boleto = 4,
}

let tipoPagamento1 = prompt("Menu: 1 - PIX 2 - Débito 3 - Crédito 4 - Boleto");

const tipoPagamentoNumero = Number(tipoPagamento1);

switch (tipoPagamentoNumero) {
  case TipoPagamento1.PIX:
    alert(`Pagamento com: ${TipoPagamento1[tipoPagamentoNumero]}`);
    break;
  case TipoPagamento1.Débito:
    alert(`Pagamento com: ${TipoPagamento1[tipoPagamentoNumero]}`);
    break;
  case TipoPagamento1.Crédito:
    alert(`Pagamento com: ${TipoPagamento1[tipoPagamentoNumero]}`);
    break;
  case TipoPagamento1.Boleto:
    alert(`Pagamento com: ${TipoPagamento1[tipoPagamentoNumero]}`);
    break;
  default:
    alert("Tipo de pagamento inválido");
    break;
}

window.location.reload();
