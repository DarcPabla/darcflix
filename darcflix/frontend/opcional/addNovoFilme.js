function salvar() {
  const nome = document.querySelector("#nome-do-filme").value;
  const sinopse = document.querySelector("#sinopse").value;
  const autor = document.querySelector("#autor").value;
  const img = document.querySelector("#link-da-imagem").value;

  const body = {
    nome,
    sinopse,
    autor,
    img,
  };

  var options = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch("http://localhost:3000/filmes/", options)
    .then((response) => response.json())
    .then((filme) => {
      window.location.href = `/darcflix/frontend/opcional/sinopses.html#${filme.id}`;
    });

  nome.innerHTML = "";
  sinopse.innerHTML = "";
  autor.innerHTML = "";
  img.innerHTML = "";

  return false;
}
