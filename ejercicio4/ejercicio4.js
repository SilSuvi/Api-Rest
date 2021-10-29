dropdownPlanetas();
function dropdownPlanetas() {
  fetch("http://swapi.dev/api/planets/")
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })

    .then(function cogerData(datos) {
      let name = "";
      for (let i = 0; i < datos.results.length; i = i + 1) {
        console.log(datos.results[i].name);
        document.getElementById(
          "dropdownPlanetas"
        ).innerHTML += `<option>${datos.results[i].name}</option>`;
      }
    });
}
function mostrarPlaneta() {
  let desplegado = document.getElementById("dropdownPlanetas").value;
  window.alert(desplegado);

  fetch("http://swapi.dev/api/planets/")
    .then(function cogerRespuesta1(respuesta1) {
      return respuesta1.json();
    })

    .then(function cogerData1(datos1) {
      let residentsPersonajes;
      for (let i = 0; i < datos1.results.length; i = i + 1) {
        if (datos1.results[i].name === desplegado) {
          for (let j = 0; j < datos1.results[i].residents.length; j = j + 1) {
            document.getElementById(
              "listadoPersonajes"
            ).innerHTML += `<li>${datos1.results[i].residents[j]}</li>`;
          }
        }
      }
    });
}
