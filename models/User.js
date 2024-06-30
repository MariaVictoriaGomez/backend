// class user

export default class User{
    constructor(idusuario, email, contrasenia, tipousuario, activo, idpersona, nombre, apellido, dni, fecha_nac, idprovincia){
        this.idusuario = parseInt(idusuario);
        this.email = email;
        this.contrasenia = contrasenia;
        this.tipousuario = tipousuario;
        this.activo = activo;
        this.idpersona = parseInt(idpersona);
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fecha_nac = fecha_nac;
        this.idprovincia = parseInt(idprovincia);
    }
    }


    