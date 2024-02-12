var nome = "Andre";
var idade = 28;
console.log(typeof nome);

var nome = "Andre";
var sobrenome = "Rafael";
var nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);

var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var melhorJogo1 = 'Esse é o "melhor" jogo';
var melhorJogo2 = "Esse é o 'melhor' jogo";
var melhorJogo3 = 'Esse é o "melhor" jogo';

var gols = 1000;
var frase = "Romario fez " + gols + " gols";
console.log(frase);
console.log(typeof frase);

var gols = 1034;
var frase = `Romario fez ${gols} gols`;
console.log(frase);
