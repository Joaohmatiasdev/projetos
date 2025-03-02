let nome 
let idade 
let TemCarta = false
let TemCarro = false

nome = prompt('qual é seu nome ?')
idade = Number(prompt(nome + ' qual é sua idade ?'))
TemCarta = prompt(nome + ' você tem carteira de habilitação?(s/n)')
TemCarro = prompt(nome +' você tem carro? (s/n))')

if(TemCarta ===("s")){
    TemCarta = true
}

if(TemCarro ===("s")){
    TemCarro = true
}
    


if(idade < 18 || !TemCarta ){
 console.log(nome + ",voce não pode dirigir ")
}
else if(idade >= 18 && TemCarta && TemCarro){


    console.log(nome, 'você pode dirigir mas não tem um carro')
}
else{
    console.log(nome, 'você não pode dirigir')
}