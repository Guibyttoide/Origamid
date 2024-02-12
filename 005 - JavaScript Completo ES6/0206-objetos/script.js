// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: 'Guilherme',
  sobrenome: 'Bergamo',
  idade: 23,
}


// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
  }

console.log(dadosPessoais.nomeCompleto())

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;
console.log(carro.preco)


// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10',
  viuHomem(late) {
    if (late === true) {
      console.log('Latir')
    } else {
      console.log('Não latir')
    }
}
}

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: '10',
  latir() {
    if (pessoa === 'homem') {
      return 'Latir'
    } else {
      return 'Não latir'
    }
}
}
