

  function criarLista(imgPath, nome, sinopse, id){
    const ul = document.querySelector('#lista-filmes-sinopse')
    ul.setAttribute("style", "list-style-type: none")
    ul.setAttribute("class", "row")
  
    const section = document.createElement('section')
    section.setAttribute("class", "sinopse")
    section.setAttribute("style", "width: 100%")
    section.setAttribute("id", id+nome)
  
    section.innerHTML = 
    `
    <img src="${imgPath}" alt="${nome}" style="width: 200px; height: 300px">
    <div>
        <h3>${nome}</h3>
        <h4>SINOPSE</h4>
        <p>${sinopse}</p>
       <button type="button" class="btn btn-outline-warning">Play</button>
    </div>
    
      <br></br>`
    
  
    ul.appendChild(section)
  }
  
  async function percorrerDB(){

    const id = window.location.hash.replace('#', "")

    console.log(id)

    let database;
    await fetch(`http://localhost:3000/filmes/${id}`).then((res)=>res.json()).then((data)=>{
        console.log(data)  
    database = data
    })
    
    
      criarLista(database.img, database.nome, database.sinopse, database.id)
    
  }

  percorrerDB()