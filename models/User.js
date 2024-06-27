export default class User{
    constructor(idusuario, email, contrasenia, tipousuario, activo){
        this.idusuario = parseInt(idusuario);
        this.email = email;
        this.contrasenia = contrasenia;
        this.tipousuario = tipousuario;
        this.activo = activo;
    }
    }