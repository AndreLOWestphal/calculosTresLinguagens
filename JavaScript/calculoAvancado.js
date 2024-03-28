
let num1;
let num2;
let operador;

num1 = prompt(`Digite um número para ser calculado: `);
num2 = prompt(`Digite outro valor para ser calculado: `);
operador = prompt(`Digite o operador de sua preferência, "+","-","*","/","**": `);

console.log(alert(`O resultado do calculo é ${operar(num1, num2, operador)}!`))


function operar(n1,n2,operacao){
    if(operacao == "+"){
        return soma(n1,n2)
    } else if(operacao == "-"){
        return subtracao(n1,n2)
    } else if(operacao == "*"){
        return multiplicacao(n1,n2)
    } else if(operacao == "/"){
        return divisao(n1,n2)
    } else if(operacao == "**"){
        return exponeciacao(n1,n2)
    } else{
        return "Erro interno operação não executada!"
    }
}

function soma(x,y){
    return x + y
}

function subtracao(x,y){
    return x - y
}

function multiplicacao(x,y){
    return x * y
}

function divisao(x,y){
    return x / y
}

function exponeciacao(x,y){
    return x**y
}