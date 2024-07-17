var tipoPagamento = prompt("MENU:\n - Pix\n - Crédito\n - Débito\n - Boleto");
switch (tipoPagamento) {
    case "Pix":
        alert("Pagamento com: ".concat(tipoPagamento));
        break;
    case "Crédito":
        alert("Pagamento com: ".concat(tipoPagamento));
        break;
    case "Débito":
        alert("Pagamento com: ".concat(tipoPagamento));
        break;
    case "Boleto":
        alert("Pagamento com: ".concat(tipoPagamento));
        break;
    default:
        alert("Tipo de pagamento inv\u00E1lido");
        break;
}
