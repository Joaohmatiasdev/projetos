
let quantidade  
let valor 
let opção =  prompt( 'Olá  Seja bem-vindo ao posto pague mais,o senhor que abastecer com (gasolina, alcool ou calibrar os pneus?) ')



switch(opção){
    case'gasolina':
         valor = Number(prompt('qual quantidade o senhor que abastecer ?'))
            quantidade = valor / 5
      console.log('o senhor abasteceu '  + quantidade + 'L')
      break
    case'alcool':
         valor =  Number(prompt('qual quantidade de alcool o senhor que abastecer? '))
            quantidade = valor / 3
      console.log('o senhor abasteceu  ' + quantidade +'L')
      break
            
    default :
console.log('pneus calibrados com sucesso!')
    
}