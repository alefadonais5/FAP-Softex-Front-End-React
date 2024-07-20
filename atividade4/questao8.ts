
// 8. Faça um programa que receba três números e os imprima em ordem crescente.
const n1 = Number(prompt(`Digite o primeiro número: `));
const n2 = Number(prompt(`Digite o segundo número: `));
const n3 = Number(prompt(`Digite o terceiro número: `));

if (n1 !== null && n2 !== null && n3 !== null){
    if(n1>n2 && n1>n3){
        if(n2>=n3){
            alert(`\n${n1}\n${n2}\n${n3}`);
        }else{
            alert(`\n${n1}\n${n3}\n${n2}`); 
        }
    }else if(n2>n1 && n2>n3){
        if(n1>=n3){
            alert(`\n${n2}\n${n1}\n${n3}`);
        }else{
            alert(`\n${n2}\n${n3}\n${n1}`);
        }
    }else{
        if(n1>=n2){
            alert(`\n${n3}\n${n1}\n${n2}`);
        }else{
            alert(`\n${n3}\n${n2}\n${n1}`);
        }
    }
}else{
    alert(`Digite um número válido! Por favor.`)
}