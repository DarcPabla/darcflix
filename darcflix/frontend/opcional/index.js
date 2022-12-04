function criarEncarte(filmeImg, filmeId, listaId) {
  const ul = document.querySelector(listaId);
  ul.setAttribute("style", "list-style-type: none");
  ul.setAttribute("class", "row");

  const div = document.createElement("div");
  div.setAttribute("class", "col-md-3");

  div.innerHTML = `
    <li>
      <a href="./sinopses.html#${filmeId}">
        <img src="${filmeImg}" class="encarte" id=${filmeId}/>
      </a>
    </li>
  `;

  ul.appendChild(div);
}

async function percorrerDB() {
  let filmes;
  await fetch("http://localhost:3000/filmes")
    .then((res) => res.json())
    .then((data) => {
      filmes = data;
    });

  for (let filme of filmes) {
    if (filme.id > filmes.length - 4) {
      criarEncarte(filme.img, filme.id, "#adicionados-recentemente");
    }

    if (filme.id < 5) {
      criarEncarte(filme.img, filme.id, "#filmes-em-alta");
    }

    if (filme.id < 5) {
      criarEncarte(filme.img, filme.id, "#ultimos-filmes-assistidos");
    }
  }
}

percorrerDB();
