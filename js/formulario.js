$(document).ready(function() {
    $("#benviar").on("click", function(event) {
        // Validación del rut de entre 9 y 10 caracteres
        var rutInput = $("#rut");
        var rutError = $("#rut-error");
        var rut = rutInput.val().trim();
        if (!/^0*(\d{1,3}(\.?\d{3}){0,2})\-?([\dkK])$/.test(rut)) {
            rutError.text("El Rut no tiene un formato válido.");
            event.preventDefault();
        } else {
            rutError.text("");
        }

        // Validación del nombre entre 3 y 20 caracteres
        var nameInput = $("#name");
        var nameError = $("#name-error");
        var name = nameInput.val().trim();
        if (name.length < 3 || name.length > 20) {
            nameError.text("El nombre debe tener entre 3 y 20 caracteres");
            event.preventDefault();
        } else {
            nameError.text("");
        }

        // Validación del apellido paterno 
        var apellidoInput = $("#appaterno");
        var apellidoError = $("#appaterno-error");
        var apellido = apellidoInput.val().trim();
        if (apellido.length < 3 || apellido.length > 20) {
            apellidoError.text("El apellido paterno debe tener entre 3 y 20 caracteres");
            event.preventDefault();
        } else {
            apellidoError.text("");
        }

        // Validación del apellido materno 
        var apmaternoInput = $("#apmaterno");
        var apmaternoError = $("#apmaterno-error");
        var apmaterno = apmaternoInput.val().trim();
        if (apmaterno.length < 3 || apmaterno.length > 20) {
            apmaternoError.text("El apellido materno debe tener entre 3 y 20 caracteres");
            event.preventDefault();
        } else {
            apmaternoError.text("");
        }
        
        //validacion de que la persona seleccione un genero
        var generoInput = $("#genero");
        var generoError = $("#genero-error");
        var genero = generoInput.val();
        if (genero === null || genero === "") {
            
            generoError.text("Por favor, seleccione un género.");
            event.preventDefault();
        } else {
            
            generoError.text("");
            $(".form").submit();
        }

        // validacion de que la fecha entrege un dato de ingreso de entre 18 y 35 años
                var fechaNacimiento = $("#fecha_nacimiento").val();
                var fechaNacimientoObj = new Date(fechaNacimiento);
                var fechaActual = new Date();
                var edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

                // Restar un año si la fecha actual es anterior al día de nacimiento del año actual
                if (fechaActual.getMonth() < fechaNacimientoObj.getMonth() || (fechaActual.getMonth() == fechaNacimientoObj.getMonth() && fechaActual.getDate() < fechaNacimientoObj.getDate())) {
                    edad--;
                }

                // Validar que la edad esté entre 18 y 35 años
                if (edad < 18 || edad > 35) {
                    $("#edad-error").text("La edad debe estar entre 18 y 35 años.");
                    event.preventDefault();
                } else {
                    $("#edad-error").text("");
                    
                }
                // validacion del celular
                var celularInput = $("#celular");
                var celularError = $("#celular-error");
                var celular = celularInput.val().trim();
                if (!/^\d{9,12}$/.test(celular)) {
                    celularError.text("El número de celular debe tener entre 9 y 12 dígitos.");
                    event.preventDefault();
                } else {
                    celularError.text("");
                }
                // Validación del email
                var emailInput = $("#email");
                var emailError = $("#email-error");
                var email = emailInput.val().trim();
                if (email.length === 0) {
                    emailError.text("El campo de email es obligatorio.");
                    event.preventDefault();
                } else {
                    emailError.text("");
                }
                // Validación de la profesión
                var profesionInput = $("#profesion");
                var profesionError = $("#profesion-error");
                var profesion = profesionInput.val().trim();
                if (profesion.length === 0) {
                    profesionError.text("El campo de profesión es obligatorio.");
                    event.preventDefault();
                } else {
                    profesionError.text("");
                }
                // Validación de la motivación
                var motivacionInput = $("#motivacion");
                var motivacionError = $("#motivacion-error");
                var motivacion = motivacionInput.val().trim();
                if (motivacion.length === 0) {
                    motivacionError.text("El campo de motivación es obligatorio.");
                    event.preventDefault();
                } else {
                    motivacionError.text("");
                }


        
    });
});



