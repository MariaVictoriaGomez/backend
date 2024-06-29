import Pais from '../../models/Pais.js';

export default class PaisesHelpers{

    createPais(newData){
        const { idpais, nombrepais } = newData;
        const pais = new Pais(idpais, nombrepais);
        console.log(pais);
        return pais;
    }


}