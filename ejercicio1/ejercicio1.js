fetch ("https://rickandmortyapi.com/api/character")
    .then(function cogerRespuesta(respuesta){
    return respuesta.json();
    }).then(function cogerDatos(datos){
    for(let i=0;i<datos.results.length; i++){
    document.getElementById("practica").innerHTML+=`
    <div>
    <p>${datos.results[i].name}</p>
    <p><img src="${datos.results[i].image}"></p>
    </div>
    `
    }
    })
