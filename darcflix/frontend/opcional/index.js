function criarLista(imgPath, id){
  const ul = document.querySelector('#lista-filmes')
  ul.setAttribute("style", "list-style-type: none")
  ul.setAttribute("class", "row")

  // ul.innerHTML = `
  // <div class="col-md-3">
  //   <li>
  //     <img src="${imgPath}" style="width: 200px; heigth: 300px" id=${id}/>
  //   </li>
  // </div> 
  // `

  const div = document.createElement("div")
  div.setAttribute("class","col-md-3")

  const filme = document.createElement('li')
  
  const img = document.createElement('img')
  img.setAttribute('style', "width: 200px")
  img.setAttribute('style', "height: 300px")
  img.setAttribute("id", id)
  img.src = imgPath

  filme.appendChild(img)
  div.appendChild(filme)
  
  ul.appendChild(div)
}

async function percorrerDB(){
  let database;
  await fetch("http://localhost:3000/filmes").then((res)=>res.json()).then((data)=>{
    database = data
  })
  
  for(let i of database) {
    
    criarListaSinopse(i.img, i.id)

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

function criarListaSinopse(imgPath, id){
  const ul = document.querySelector('#lista-filmes-sinopse')
  //ul.setAttribute("style", "list-style-type: none")
  //ul.setAttribute("class", "row")

  const div = document.createElement("div")
  div.setAttribute("class","col-md-3")

  const filme = document.createElement('li')

  const a = document.createElement('a')
  a.href= `./sinopse.html#${id}`  

  const img = document.createElement('img')
  img.setAttribute('style', "width: 200px")
  img.setAttribute('style', "height: 300px")
  img.setAttribute("id", id)
  img.src = imgPath

  a.appendChild(img)
  filme.appendChild(a)
  div.appendChild(filme)
  ul.appendChild(div)
}
 



percorrerDB()

