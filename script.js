document.getElementById("formulario-contacto").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("mensaje-exito").style.display = "block";
  e.target.reset();
};
