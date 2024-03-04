// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
  nome: "Guilherme",
  sobrenome: "Bergamo",
  idade: 23,
  // Crie um método no objeto anterior, que mostre o seu nome completo
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(dadosPessoais);
console.log(dadosPessoais.nomeCompleto());

// Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: "audi",
};

console.log(carro.preco);
carro.preco = 3000;

console.log(carro);
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "latiu ao ver o homem";
    } else {
      return "não viu ninguem";
    }
  },
  cachorroDados() {
    return `Cachorro da raça ${this.raca} na cor ${this.cor}, com aproximadamente ${this.idade} anos, ele ${this.latir("homem")}`;
  },
};

// console.log(cachorro);

console.log(cachorro.cachorroDados());
