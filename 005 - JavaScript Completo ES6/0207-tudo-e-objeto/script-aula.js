var nome = "Guilherme";
var nomeMinusculo = nome.toLowerCase();
var numero = 1.5;

console.log(nome);
console.log(nomeMinusculo);
console.log(numero.toFixed());

var btn = document.querySelector(".btn");

btn.classList.add("teste");
btn.innerHTML; // Retorna o conteúdo do botão
btn.addEventListener("click", function () {
  this.classList.toggle("red");
});
