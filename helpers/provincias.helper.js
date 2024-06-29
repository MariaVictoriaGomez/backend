import Provincia from '../models/Provincias.js';

export default class ProvinciassHelpers{

    createProvincia(newData){
        const { idprovincia, nombreprovincia, pais } = newData;
        const provincia = new Provincia(idprovincia, nombreprovincia, pais);
        console.log(provincia);
        return provincia;
    }


}