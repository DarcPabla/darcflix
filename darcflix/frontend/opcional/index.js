function criarLista(imgPath, id){
  const ul = document.querySelector('#lista-filmes')
  ul.setAttribute("style", "list-style-type: none")
  ul.setAttribute("class", "row")

  const div = document.createElement('div')
  div.setAttribute("class", "col-md-3")

  div.innerHTML = `
    <li>
      <a href="./sinopses.html#${id}">
        <img src="${imgPath}" style="width: 200px; heigth: 300px" id=${id}/>
      </a>
    </li>
  `

  ul.appendChild(div)
}

async function percorrerDB(){
  let database;
  await fetch("http://localhost:3000/filmes").then((res)=>res.json()).then((data)=>{
    database = data
  })
  
  for(let i of database) {

    if(i.id > database.length - 4){
      criarLista(i.img, i.id)

    }


    if(i.id < 5){
criarListaEmAlta(i.img, i.id)
    }
   
    
  }
}

async function salvar(){
  const nome = document.querySelector("#nome").value
  const sinopse = document.querySelector("#sinopse").value
  const autor = document.querySelector("#autor").value
  const img = document.querySelector("#link-imagem").value

  const body = {
    nome,
    sinopse,
    autor,
    img
  }

  var options = { method: 'POST',
               mode: 'cors',
               headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(body)
              };

  await fetch("http://localhost:3000/filmes/", options)

  nome.innerHTML = ""
  sinopse.innerHTML = ""
  autor.innerHTML = ""
  img.innerHTML = ""


}

function criarListaEmAlta(imgPath, id){
  const ul = document.querySelector('#ultimos-filmes')
  ul.setAttribute("style", "list-style-type: none")
  ul.setAttribute("class", "row")

  const div = document.createElement('div')
  div.setAttribute("class", "col-md-3")

  div.innerHTML = `
    <li>
      <a href="./sinopses.html#${id}">
        <img src="${imgPath}" style="width: 200px; heigth: 300px" id=${id}/>
      </a>
    </li>
  `

  ul.appendChild(div)


}

function criarListaEmAlta(imgPath, id){
  const ul = document.querySelector('#lista-filmes-alta')
  ul.setAttribute("style", "list-style-type: none")
  ul.setAttribute("class", "row")

  const div = document.createElement('div')
  div.setAttribute("class", "col-md-3")

  div.innerHTML = `
    <li>
      <a href="./sinopses.html#${id}">
        <img src="${imgPath}" style="width: 200px; heigth: 300px" id=${id}/>
      </a>
    </li>
  `

  ul.appendChild(div)
}
 



percorrerDB()

