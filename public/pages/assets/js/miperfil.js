function saveChanges() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const provincia = document.getElementById('provincia').value;
    const pais = document.getElementById('pais').value;

    // lógica para guardar los cambios y enviar una solicitud al servidor

    alert('Cambios guardados:\n' + 
          'Nombre: ' + nombre + '\n' + 
          'Apellido: ' + apellido + '\n' + 
          'Email: ' + email + '\n' + 
          'Provincia: ' + provincia + '\n' + 
          'País: ' + pais);
}

function borrarCuenta() {
    if (confirm('¿Estás seguro de que deseas eliminar tu cuenta?')) {
        // lógica para eliminar la cuenta y enviar una solicitud al servidor

        alert('Cuenta eliminada');
        document.getElementById('userForm').reset();
    }
}
