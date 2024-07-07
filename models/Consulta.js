export default class Consulta{
    constructor(idconsulta, idusuario, consulta, fecha){
        this.idconsulta = parseInt(idconsulta);
        this.idusuario = parseInt(idusuario);
        this.consulta = consulta;
        this.fecha = new Date(fecha).toISOString().slice(0, 19).replace('T', ' ');
    }
    }