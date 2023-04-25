src = "https://code.jquery.com/jquery-3.6.0.min.js"

$(document).ready(function () {
    $("#benviar").on("click", function (event) {
        // Validación del rut de entre 9 y 10 caracteres
        var rutInput = $("#rut");
        var rutError = $("#rut-error");
        var rut = rutInput.val().trim();
        if (rut.length < 9 || rut.length > 10) {
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
        }

        // validacion de que la fecha entrege un dato de ingreso de entre 18 y 35 años
        var fechaNacimiento = $("#fecha_nacimiento").val();
        var fechaNacimientoObj = new Date(fechaNacimiento);
        var fechaActual = new Date();
        var edad_fecha = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();

        // Restar un año si la fecha actual es anterior al día de nacimiento del año actual
        if (fechaActual.getMonth() < fechaNacimientoObj.getMonth() || (fechaActual.getMonth() == fechaNacimientoObj.getMonth() && fechaActual.getDate() < fechaNacimientoObj.getDate())) {
            edad_fecha--;

        }

        // Validar que la edad esté entre 18 y 35 años
        var edadInput = $("#edad");
        var edad = edadInput.val();
        if (edad > 17 && edad < 36) {
            $("#edad-error").text("");
        } else {
            $("#edad-error").text("La edad debe estar entre 18 y 35 años.");
            event.preventDefault();
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

        $("#btnGenerarCarta").on("click", function () {
            var rut = $("#rut").val();
            var nombre = $("#name").val();
            var apellidoPaterno = $("#appaterno").val();
            var apellidoMaterno = $("#apmaterno").val();
            var genero = $("#genero").val();
            var fechaNacimiento = $("#fecha_nacimiento").val();
            var celular = $("#celular").val();
            var email = $("#email").val();
            var profesion = $("#profesion").val();
            var motivacion = $("#motivacion").val();

            // Generar la carta con los datos del formulario
            var carta = "Estimado(a), me presento mi nombre es " + nombre + " " + apellidoPaterno + " " + apellidoMaterno + ",\n\n";
            carta += "Me dirijo a usted con el fin de expresar mi interés en trabajar en su empresa. Como profesional y con experiencia en el campo " + profesion + ", considero que puedo contribuir de manera significativa al equipo de trabajo de su organización.\n\n";
            carta += "Adjunto a esta carta, por favor encuentre mi currículum vitae que detalla mi formación académica, experiencia laboral y habilidades relevantes para el puesto. Me gustaría resaltar mi interés y entusiasmo por formar parte de su empresa y colaborar en el logro de sus objetivos.\n";
            carta += "Quedo a su disposición para ampliar cualquier información adicional que considere necesaria y para participar en entrevistas o pruebas que su empresa considere pertinentes. Agradezco de antemano su atención a mi solicitud y espero tener la oportunidad de discutir cómo puedo contribuir al éxito de su empresa, a continuacion le adjunto mis datos personales.\n";
            carta += "Atentamente,\n";
            carta += nombre + " " + apellidoPaterno + " " + apellidoMaterno + "\n";
            carta += "Género: " + genero + "\n";
            carta += "Fecha de Nacimiento: " + fechaNacimiento + "\n";
            carta += "Celular: " + celular + "\n";
            carta += "Email: " + email + "\n";
            carta += "Profesión: " + profesion + "\n";
            carta += "Motivación: " + motivacion + "\n\n";


            alert(carta);
        });
    });
});



