import ProvinciasDaoMysql from '../dao/provincia.dao.mysql.js';
import ProvinciasHelpers from '../helpers/helpers/provincias.helper.js';

export default class ProvinciaControllers {

    constructor() {
        //     this.db = new UsersDaoMemory();
        this.db = new ProvinciasDaoMysql()
        this.helpers = new ProvinciasHelpers();
    }

    getProvincias = async (req, res) => {
        const provincias = await this.db.getProvincias();
        res.json(provincias);
    }

    getProvinciaById = async (req, res) => {
        const { id } = req.params
        const provincia = await this.db.getProvinciaById(id)
        res.json(provincia)
    }

  
    addProvincia = async (req, res) => {
        const newProvincia = this.helpers.createProvincia(req.body);
        const result = await this.db.addProvincia(newProvincia);
        res.json(result);
    }

    modifyProvincia = async (req, res) => {
        const modifiedProvincia = this.helpers.createProvincia(req.body)
        const result = await this.db.modifyProvincia(modifiedProvincia)
        res.json(result)
    }

    deleteProvincia = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteProvincia(id)
        res.json(result);
    }
}



