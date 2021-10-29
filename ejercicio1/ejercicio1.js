let personajes = "";

fetch("https://rickandmortyapi.com/api/character")
  .then(function recibirRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function cogerDatos(datos) {
    for (let i = 0; i < datos.results.length; i++) {
      personajes =
        personajes +
        `
            <div>
                <img src="${datos.results[i].image}" alt""/>
                <h1>${datos.results[i].name}</h1>
            </div>
        `;
    }
    document.getElementById("div1").innerHTML = personajes;
  });
