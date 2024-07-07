import Consulta from '../../models/Consulta.js';

export default class ConsultasHelpers{

    createConsulta(newData){
        const { idconsulta, idusuario, consulta, fecha } = newData;
        const newConsulta = new Consulta(0, (idusuario || 1), consulta, fecha);
        console.log(newConsulta);
        return newConsulta;
    }


}