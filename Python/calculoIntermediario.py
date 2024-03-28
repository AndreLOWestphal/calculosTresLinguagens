#Começaremos pedindo numeros e assim responderemos e os imprimiremos via alert, no browser. Aumentaremos o Grau de dificuldade adicionando condições.

numP1 = int(input('Digite um número: '))
numP2 = int(input('Digite um segundo número: '))
operador = input('Digite um dos operados aritiméticos "+,-,*,/": ')

#Faremos aqui uma condicional para os operadores usados e o retornaremos
# Imprimiremos o alert usando interpolação uma forma de concatenar mais moderna

if(operador == "+"):
    print(f'O resultado da soma é {numP1 + numP2}')
elif(operador == "-"):
    print(f'O resultado da subtração é {numP1 - numP2}')
elif(operador == "*"):
    print(f'O resultado da multiplicação é {numP1 * numP2}')
elif(operador == "/"):
    print(f'O resultado da divisão é {numP1 / numP2}')
else:
    print(f'A opção selecionada é invalida!')


