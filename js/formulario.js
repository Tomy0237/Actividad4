function validar(){
    let rut = document.getElementById('rut').value;
    let edad = document.getElementById('edad').value;

    if (rut.length > 8 && rut.length < 11){
        alert(rut.length);


    }else{
        alert(rut.length);

    }

    if (edad > 17 && edad < 36) {
        alert('Buenas');


    }
    else{
        alert(edad);
    }


    
}
