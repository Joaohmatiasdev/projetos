
let nome = prompt('qual é seu nome ?')

let dia = Number(prompt('Olá ' + nome + ' escolha um dia da semana!(1,7)'))

switch(dia){
    case 1:
        console.log('Bem-vinda, segunda -feira!', nome + ',  uma nova semana repleta de novas oportunidades!!!')
        break
    case 2:
        console.log('Terça-feira ', nome + ',  continue firme, a semana está só começando!!')
        break
    case 3:
        console.log('Quarta-feira ', nome + ',  metade da semana, falta pouco!!')
        break
    case 4:
        console.log('Quinta-feira ', nome + ',  O fim de semana está chegando!!')
        break
    case 5: 
        console.log('Sexta-feira ', nome + ',  Último esforço antes do descanso!!')
        break
    case 6:
        console.log('Sábado ', nome  + ',  Último esforço antes do descanso !!')
        break
    case 7:
        console.log('Domingo', nome + ', Dia de descanso e preparação para a nova semana!!')
        break
    default :
    console.log(nome + ', Opção invalida, tente um dia válido (1,7)')
    break
        


}
