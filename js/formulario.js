
document.addEventListener("DOMContentLoaded", function() {
    //código JavaScript
  
        document.getElementById("benviar").addEventListener("click", function (event) {
            // Validación del nombre entre 3 y 20 caracteres
            var nameInput = document.getElementById("name");
            var nameError = document.getElementById("name-error");
            var name = nameInput.value.trim();
            if (name.length < 3 || name.length > 20){
            nameError.textContent = "El nombre debe tener entre 3 y 20 caracteres";
            event.preventDefault();
            } else {
            nameError.textContent = "";
            }

            var apellidoInput = document.getElementById("appaterno");
            var apellidoError = document.getElementById("appaterno-error");
            var apellido = apellidoInput.value.trim();
            if (apellido.length < 3 || apellido.length > 20) {
            apellidoError.textContent = "El apellido paterno debe tener entre 3 y 20 caracteres";
            event.preventDefault();
            } else {
            apellidoError.textContent = "";
            }

            var apmaternoInput = document.getElementById("apmaterno");
            var apmaternoError = document.getElementById("apmaterno-error");
            var apmaterno = apmaternoInput.value.trim();
            if (apmaterno.length < 3 || apmaterno.length > 20) {
            apmaternoError.textContent = "El apellido materno debe tener entre 3 y 20 caracteres";
            event.preventDefault();
            } else {
            apmaternoError.textContent = "";
            }
        });
    });
        


