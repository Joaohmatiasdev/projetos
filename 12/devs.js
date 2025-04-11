let nome = (prompt(' Digite seu nome '))
let idade = Number(prompt('Digite sua idade '))
let profissão = (prompt(' Digite sua profissão '))
let altura = Number(prompt(' Digite sua altura '))
let peso = Number(prompt('Digite seu peso '))

console.log('ola '+ nome +  ' você tem ' + idade + ' anos , é ' + profissão + 'tem' + altura +'m de altura e pesa '+  peso + 'kg')


switch(idade){
    case idade > 18  :
        console.log('estar liberado para tomar umas geladas')
        break
    case idade < 18 : 
    console.log('Sem gelada para você')
        
    }
    






















//('Olá ' + nome, + 'você tem ' + idade + 'anos, é '+  profissão +' tem ' + altura + 'm de altura e pesa ' + peso + 'kg')