// 28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma mensagem completa, como "Você mora em [cidade], [estado].".
let city = prompt(`Qual o nome da sua cidade?`);
let estado = prompt(`Qual o nome do seu estado?`);

alert(`Você mora em ${city}-${estado}.`);