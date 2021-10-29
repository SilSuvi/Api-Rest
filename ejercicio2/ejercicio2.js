fetch("https://randomuser.me/api/")
  .then(function llamada(respuesta) {
    return respuesta.json();
  })
  .then(function cogerRespuesta(segundaRespuesta) {
    for (let i = 0; i < segundaRespuesta.results.length; i++) {
      document.getElementById("datos").innerHTML += `
            <div>
                <img src="${segundaRespuesta.results[i].picture.large}" alt""/>
                <h1>${segundaRespuesta.results[i].name.title} ${segundaRespuesta.results[i].name.first} ${segundaRespuesta.results[i].name.last}</h1>
                <h1>${segundaRespuesta.results[i].email}</h1>
                <h1>${segundaRespuesta.results[i].location.street.name} ${segundaRespuesta.results[i].location.street.number}</h1>
                <h1>${segundaRespuesta.results[i].location.city} ${segundaRespuesta.results[i].location.state}</h1>
                <h1>${segundaRespuesta.results[i].location.country} ${segundaRespuesta.results[i].location.postcode}</h1>
            </div>`;
    }
  });
