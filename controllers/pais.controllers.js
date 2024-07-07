import PaisesDaoMysql from '../dao/pais.dao.mysql.js';
import PaisesHelpers from '../helpers/helpers/paises.helper.js';

export default class PaisControllers {

    constructor() {
        //     this.db = new UsersDaoMemory();
        this.db = new PaisesDaoMysql()
        this.helpers = new PaisesHelpers();
    }

    getPaises = async (req, res) => {
        const paises = await this.db.getPaises();
        res.json(paises);
    }

    getPaisById = async (req, res) => {
        const { id } = req.params
        const pais = await this.db.getPaisById(id)
        res.json(pais)
    }

  
    addPais = async (req, res) => {
        const newPais = this.helpers.createPais(req.body);
        const result = await this.db.addPais(newPais);
        res.json(result);
    }

    modifyPais = async (req, res) => {
        const modifiedPais = this.helpers.createPais(req.body)
        const result = await this.db.modifyPais(modifiedPais)
        res.json(result)
    }

    deletePais = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deletePais(id)
        res.json(result);
    }
}
