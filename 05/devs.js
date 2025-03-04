let Num1 = Number(prompt('Escolha um número '))
let Num2 = Number(prompt('diga outro número '))
let opção = prompt('escolha um dos operadores (+,-,*,/)')

switch(opção){
    case '+':
      console.log(Num1 + Num2)
        break
    case '-':
        console.log(Num1 - Num2)
        break
    case '*':
        console.log(Num1 * Num2)
        break
    case '/':
        console.log(Num1 / Num2)
        break
    default :
    console.log('operador invalido')
    break
        
}