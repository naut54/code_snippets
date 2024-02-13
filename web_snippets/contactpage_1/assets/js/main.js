const formulario = document.getElementById("twos");

formulario.addEventListener("submit", (event) => {
  const nombre = document.getElementById("email").value;

  if (nombre === "" || correo === "") {
    event.preventDefault();
    alert("Por favor, rellena todos los campos del formulario.");
  }
});
