
num1 = float(input("Digite um número para ser calculado: "))
num2 = float(input("Digite outro número para ser calculado: "))
operador = input('Digite o operador de sua preferência, "+","-","*","/","**": ')


def operar(n1,n2,operacao):
    if(operacao == "+"):
        return soma(n1,n2)
    elif(operacao == "-"):
        return subtracao(n1,n2)
    elif(operacao == "*"):
        return multiplicacao(n1,n2)
    elif(operacao == "/"):
        return divisao(n1,n2)
    elif(operacao == "**"):
        return exponenciacao(n1,n2)
    else:
        return "Erro interno operação não executada!"

def soma(x,y):
    return x + y

def subtracao(x,y):
    return x - y

def multiplicacao(x,y):
    return x * y

def divisao(x,y):
    return x / y

def exponenciacao(x,y):
    return x**y

print(f'O resultado do calculo é {operar(num1, num2, operador)}!')