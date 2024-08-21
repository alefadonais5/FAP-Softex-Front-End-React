// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true"
// se o número for par ou "false" caso contrário.

function isPar(n:number) {
    if (n % 2 === 0){
        return true;
    }else{
        return false;
    }
}

console.log(isPar(4));