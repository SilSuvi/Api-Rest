function fotoDelDia() {
  let dia = document.getElementById("dia").value;
  let mes = document.getElementById("mes").value;
  let anyo = document.getElementById("anyo").value;

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=HAMo33x9eTuDqv8o1JIykpefino4F9TBTd1wmFVf&date=${anyo}-${mes}-${dia}`
  )
    .then(function llamada(respuesta) {
      return respuesta.json();
    })
    .then(function cogerRespuesta(segundaRespuesta) {
      document.getElementById("datos").innerHTML = `
        <div>
            <p>Fecha:${segundaRespuesta.date}</p>
            <p>Título: ${segundaRespuesta.title}</p>
            <img src=${segundaRespuesta.url} alt=""/>
            <p>Descripción: ${segundaRespuesta.explanation}</p>
        </div>
    `;
    });
}
