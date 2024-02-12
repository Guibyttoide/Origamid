// Crie uma função para verificar se um valor é Truthy
function verificar(valor) {
	if (Boolean(valor) === true) {
		return true;
	} else {
		return false;
	}
}

function verificar2(valor) {
  return !!valor;
}

console.log(verificar(""));
console.log(verificar(true));
console.log(verificar(-0));
console.log(verificar({}));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lado) {
	return lado * 4;
}

perimetro(5);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
	return `${nome} ${sobrenome}`;
}

nomeCompleto("Guilherme", "Bergamo");

// Crie uma função que verifica se um número é par
function verificarPar(numero) {
	if (numero % 2 === 0) {
		return true;
	}
}

console.log(verificarPar(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function verificarDado(dado) {
	return typeof dado;
}

console.log(verificarDado(12));
console.log(verificarDado({}));
console.log(verificarDado(" "));
console.log(verificarDado(-0));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

let btn = document.querySelector(".btn");

btn.addEventListener("click", function(){return console.log(`Guilherme Bergamo`)});

// Corrija o erro abaixo

var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
	return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
	return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
