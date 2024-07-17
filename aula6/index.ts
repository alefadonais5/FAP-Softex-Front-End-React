const tipoPagamento = prompt("MENU:\n - Pix\n - Crédito\n - Débito\n - Boleto");

switch (tipoPagamento) {
  case "Pix":
    alert(`Pagamento com: ${tipoPagamento}`);
    break;
  case "Crédito":
    alert(`Pagamento com: ${tipoPagamento}`);
    break;
  case "Débito":
    alert(`Pagamento com: ${tipoPagamento}`);
    break;
  case "Boleto":
    alert(`Pagamento com: ${tipoPagamento}`);
    break;
  default:
    alert(`Tipo de pagamento inválido`);
    break;
}
