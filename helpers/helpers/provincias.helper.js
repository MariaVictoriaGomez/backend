import Provincia from '../../models/Provincia.js';

export default class ProvinciasHelpers{

    createProvincia(newData){
        const { idprovincia, nombreprovincia, pais } = newData;
        const provincia = new Provincia(idprovincia, nombreprovincia, pais);
        console.log(provincia);
        return provincia;
    }


}



