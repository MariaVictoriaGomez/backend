// class user

export default class User{
    constructor(idusuario, email, contrasenia, tipousuario, activo, idpersona, nombre, apellido, dni, fecha_nac, provincia){
        this.idusuario = parseInt(idusuario);
        this.email = email;
        this.contrasenia = contrasenia;
        this.tipousuario = tipousuario;
        this.activo = activo;
        this.idpersona = parseInt(idpersona);
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fecha_nac = new Date(fecha_nac).toISOString().slice(0, 19).replace('T', ' ');
        this.provincia = parseInt(provincia);
    }
    }



    