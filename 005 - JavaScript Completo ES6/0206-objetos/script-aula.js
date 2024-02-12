var pessoa = {
	nome: "Andre",
	idade: 28,
};

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

var quadrado = {
	lados: 4,
	area: function(lado) {
		return lado * lado;
	},
	perimetro: function(lado) {
		return this.lados * lado;
	},
}

console.log(quadrado.area(5))
console.log(quadrado.area(4))