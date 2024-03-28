//Começaremos pedindo numeros e assim responderemos e os imprimiremos via alert, no browser. Aumentaremos o Grau de dificuldade adicionando condições.

let numP1 = prompt('Digite um número: ');
let numP2 = prompt('Digite um segundo número: ');
let operador = prompt('Digite um dos operados aritiméticos "+,-,*,/": ');

// Faremos aqui uma condicional para os operadores usados e o retornaremos via window.alert

if(operador == "+"){
    alert(`O resultado da soma é ${Number(numP1)+Number(numP2)}`)
} else if(operador == "-"){
    alert(`O resultado da subtração é ${numP1 - numP2}`)
} else if(operador == "*"){
    alert(`O resultado da multiplicação é ${numP1 * numP2}`)
} else if(operador == "/"){
    alert(`O resultado da divisão é ${numP1 / numP2}`)
} else{
    alert("A opção selecionada é invalida!")
}
// Imprimiremos o alert usando interpolação uma forma de concatenar mais moderna
