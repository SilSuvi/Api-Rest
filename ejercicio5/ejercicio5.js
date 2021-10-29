fetch("https://pokeapi.co/api/v2/type/")
  .then(function llamada(respuesta) {
    return respuesta.json();
  })
  .then(function cogerRespuesta(segundaRespuesta) {
    for (let i = 0; i < segundaRespuesta.results.length; i++) {
      document.getElementById("select").innerHTML += `
      <option>${segundaRespuesta.results[i].name}</option>`;
    }
  });

function mostrarPokemon(e) {
  console.log(e.target.value);
  const url = e.target.value;

  fetch(url)
    .then(function cogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function cogerRespuesta(segundaRespuesta) {
      for (let i = 0; i < 3; i++) {
        const numero =
          Math.floor(Math.random() * (segundaRespuesta.pokemon.length - 0)) + 0;
        document.getElementById("datos").innerHTML += `
        <p>${segundaRespuesta.pokemon[numero].pokemon.name}</p>`;
      }
    });
}
