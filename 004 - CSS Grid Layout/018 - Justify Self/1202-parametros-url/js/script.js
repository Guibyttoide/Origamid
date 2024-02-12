// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu li > a");

function ativarLink(link) {
  if (location.href.includes(link.href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar Items do Orçamento
const parametros = new URLSearchParams(location.search).forEach(
  ativarParametros
);

function ativarParametros(parametro) {
  if (parametro) {
    document.getElementById(parametro).checked = true;
  } else {
    
  }
}
