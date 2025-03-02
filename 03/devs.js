let nome = 0
let TemFome = 0
let TemDinheiro = 0
let RestauAberto = 0

nome = prompt('Qual é seu nome ?')
TemFome = prompt(nome + ' estar com fome ?')
TemDinheiro = prompt(nome + ' tem dinheiro?')
RestauAberto = prompt('Restaurante estar aberto?')

if(TemFome === 'sim' && TemDinheiro === 'sim' && RestauAberto === 'sim'){
    console.log('Boa, ' + nome + ' hoje o jantar será no seu restaurante preferido')
}
else if(TemFome ==='sim' &&  TemDinheiro === 'sim' &&  RestauAberto === 'não'){
    console.log(nome,  'peça um delivery!')
}
else{
    console.log(nome, 'hoje a janta será em casa')
}