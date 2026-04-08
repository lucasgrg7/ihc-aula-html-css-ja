function ativarModo() {
  const body = document.body;
  const titulo = document.getElementById("titulo");
  const descricao = document.getElementById("descricao");

  body.classList.add("sabio");

  titulo.innerText = "Modo Sábio Ativado";
  descricao.innerText = "Chakra Total!!!";
}

function desativarModo() {
  const body = document.body;
  const titulo = document.getElementById("titulo");
  const descricao = document.getElementById("descricao");

  body.classList.remove("sabio");

  titulo.innerText = "Modo Normal";
  descricao.innerText = "Clique no botão para entrar em modo sábio";
}