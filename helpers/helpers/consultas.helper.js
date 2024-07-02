import Consulta from '../../models/Consulta.js';

export default class ConsultasHelpers{

    createConsulta(newData){
        const { idconsulta, idusuario, consulta, fecha } = newData;
        const newConsulta = new Consulta((idconsulta || 1), (idusuario || 1), consulta, fecha);
        console.log(newConsulta);
        return newConsulta;
    }


}