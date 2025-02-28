let nome = prompt('Qual é seu nome?')
let idade = Number(prompt( nome + 'Qual é sua idade?'))
let altura = Number(prompt( nome +  'Qual é sua atura? '))
let peso = Number(prompt(nome + 'Qual é seu peso?'))


let imc = peso / (altura * altura)

console.log(imc)