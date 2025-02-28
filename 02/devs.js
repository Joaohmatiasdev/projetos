let nome = prompt('qual é seu nome?')
let idade = Number(prompt( nome + ' qual é sua idade?'))
let altura = Number(prompt( nome +  ' qual é sua altura? '))
let peso = Number(prompt(nome + ' qual é seu peso?'))

let AnosNasc = 0

AnosNasc = 2023 - idade


let imc = peso / (altura * altura)

console.log(imc)

console.log('Ola ' +  nome, ' você tem ' + idade + ' anos, ' + ' nasceu em  ' + AnosNasc,  ' tem ' +  altura  + ' de altura,pesa ' + peso +'kg seu IMC é ' + imc + 'kg/m2')