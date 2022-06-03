function validar() {
    var nombre = document.formulario.txt_nombre.value
    var apellidos = document.formulario.txt_apellidos.value
    var telefono = document.formulario.txt_telefono.value
    var rut = document.formulario.txt_rut.value
    var contDatos = document.getElementById('datos');

    if (nombre.length < 3) {
        alert('Debe ingresar un nombre con más de 3 caracteres ');
        document.formulario.txt_nombre.focus();
        return false;
    }
    else {
        var nombreNode = document.createElement("p");
        var nombreTextNode = document.createTextNode("Nombre   es: " + nombre);
        nombreNode.appendChild(nombreTextNode);
    }
    if (apellidos.length < 3) {
        alert('Debe ingresar un apellido con más de 3 caracteres');
        document.formulario.txt_apellidos.focus();
        return false;
    }
    else {
        var apellidoNode = document.createElement("p");
        var apellidoTextNode = document.createTextNode("Apellido   es: " + apellidos);
        apellidoNode.appendChild(apellidoTextNode);
    }
    if (telefono.length < 8 || telefono.length > 10) {
        alert('Ingrese un numero correcto');
        document.formulario.txt_telefono.focus();
        return false;
    }
    else {
        var telefonoNode = document.createElement("p");
        var telefonoTextNode = document.createTextNode("Telefono es: " + telefono);
        telefonoNode.appendChild(telefonoTextNode);
    }
    if (rut.length < 9 || rut.length > 10) {
        alert('Debe ingresar un rut válido.')
        document.formulario.txt_rut.focus();
        return false;
    }
    else {
        var rutNode = document.createElement("p");
        var rutTextNode = document.createTextNode("Rut   es: " + rut);
        rutNode.appendChild(rutTextNode);
    }
    alert("Datos cliente contacto")
    contDatos.appendChild(nombreNode);
    contDatos.appendChild(apellidoNode);
    contDatos.appendChild(telefonoNode);
    contDatos.appendChild(rutNode);

    alert("Ha completado correctamente le formulario")
    document.formulario.action() = "..."

}

