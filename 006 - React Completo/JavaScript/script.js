const menu = {
  seletor: '.principal',
};

console.log(menu.seletor.toUpperCase());

// --------------------------------------
// Função

function upperName(name) {
  return name.toUpperCase();
}

// --------------------------------------
// Arrow Function

const lowerCase = (name) => {
  return name.toUpperCase();
};

// --------------------------------------
// Arrow Function

const lowerCase2 = (name) => name.toUpperCase();

// --------------------------------------
// Função Anônima

// const upperName = function (name) {
//   return name.toUpperCase();
// };

// --------------------------------------
// Destructuring (Desestruturação)

// Não desestruturado
function handleMouse(event) {
  const x = event.clientX;
  const y = event.clientY;
  console.log(x, y);
}

// Desestruturado
function handleMouse(event) {
  const { clientX, clientY } = event;
  console.log('X:', clientX, 'Y:', clientY);
}

function handleMouse({ event }) {
  const { clientX, clientY } = event;
  console.log('X:', clientX, 'Y:', clientY);
}

function handleMouse({ clientX, clientY }) {
  console.log('X:', clientX, 'Y:', clientY);
}

document.addEventListener('click', handleMouse);

// --------------------------------------
// Destructuring Array (Desestruturação de Array)

const frutas = ['banana', 'uva'];
const [fruta1, fruta2] = frutas;

console.log('0:', fruta1);
console.log('1:', fruta2);

const useQuadrado = [
  4,
  function (lado) {
    return 4 * lado;
  },
];

const [lados, perimetro] = useQuadrado;
console.log(lados);
console.log(perimetro(10));

// --------------------------------------
// REST

// Sem REST
function showList1(empresa, clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList1('Google', ['Andre', 'Rafael']);

// Com REST
function showList2(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList2('Google', 'Andre', 'Rafael', 'Item 2');

// --------------------------------------
// SPREAD

const numeros = [10, 5, 20];

const maior = Math.max(...numeros);
console.log(maior);

// Com Spread
const numeroSpread = [13, ...numeros, 24, 32, 35];
console.log(numeroSpread);

// Sem Spread
const numeroNoSpread = [13, numeros, 24, 32, 35];
console.log(numeroNoSpread);

// Adicionar novos itens na array
const carro = {
  cor: 'azul',
  portas: 4,
};

carroAno = { ...carro, ano: 2008 };

console.log(ano);
