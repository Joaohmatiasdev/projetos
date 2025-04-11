let nota1 = (Number(prompt('Digite a primeira nota:')))
let nota2 = (Number(prompt('Digite a segunda nota')))
let nota3 = (Number(prompt('Digite o terceira nota ')))
let nota4 = (Number(prompt('Digite a quarta nota')))


 let media = (nota1 + nota2 + nota3 + nota4) / 4

    if(media >= 7){
        console.log( 'Sua media foi ' +  media + ' e você estar aprovado')
     } else if(media == 5 && media < 7){
        console.log('Sua media foi' + media + 'você estar de recuperação')
      
    }else{
        console.log('Sua media foi ' + media + ' e você estar reprovado')
    }
    

