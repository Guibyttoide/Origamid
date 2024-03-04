var pessoa = {
  nome: "Andre",
  idade: 28,
};

console.log(pessoa); // Retorna o Objeto
console.log(pessoa.idade); // Retorna o valor da propriedade idade dentro do objeto pessoa

// ------------------------------------

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// ------------------------------------

// Com o ES6+ não é necessário escrever function, reduzindo a versobidade
var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

// ------------------------------------

Math.PI();
Math.random();

var pi = Math.PI();
var random = Math.random();

console.log(pi);
console.log(random);

// ------------------------------------

var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84e",
};

menu.backgroundColor = "#303030"; // Do Notation Set, Seta um novo valor para a propriedade existente
menu.color = "#abc"; // Do Notation Get, Porém caso ela não exista, Cria uma nova propriedade com o valor fornecido

// ------------------------------------

var height = 100;
var menu = {
  width: 800,
  height: 50,
  Metadeheight() {
    return this.height * 2;
    return height / 2;
  },
  backgroundColor: "#84e",
};
