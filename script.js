const input = document.getElementById("busqueda");
const botonBuscar = document.getElementById("buscar");
const botonSuerte = document.getElementById("suerte");

function redirigir() {
  const query = input.value.trim();
  if (query) {
    window.location.href = `https://google.com/search?q=${encodeURIComponent(query)}`;
  }
}

botonBuscar.addEventListener("click", redirigir);
botonSuerte.addEventListener("click", redirigir);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    redirigir();
  }
});
