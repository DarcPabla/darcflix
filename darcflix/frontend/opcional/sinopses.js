function criarSinopse(imgPath, nome, sinopse, id) {
  const section = document.querySelector("section");
  section.setAttribute("id", id + nome);

  section.innerHTML = `
    <img src="${imgPath}" alt="${nome}" style="width: 200px; height: 300px">
    <div>
      <h1>${nome}</h1>
      <p class="h4">SINOPSE</p>
      <p class="text-justify">${sinopse}</p>
      <button type="button" class="btn btn-outline-warning">Assistir</button>
    </div>`;
}

async function script() {
  const id = window.location.hash.replace("#", "");

  const response = await fetch(`http://localhost:3000/filmes/${id}`);
  const filme = await response.json();

  // Altera título da página
  document.querySelector("title").innerText = `${filme.nome} - DAR'C FLIX`;

  criarSinopse(filme.img, filme.nome, filme.sinopse, filme.id);
}

script();
