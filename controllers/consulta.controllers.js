import ConsultasDaoMysql from '../dao/consulta.dao.mysql.js';
import ConsultasHelpers from '../helpers/helpers/consultas.helper.js';

export default class ConsultaControllers {

    constructor() {
        this.db = new ConsultasDaoMysql()
        this.helpers = new ConsultasHelpers();
    }

    getConsultas = async (req, res) => {
        const consultas = await this.db.getConsultas();
        res.json(consultas);
    }

    getConsultaById = async (req, res) => {
        const { id } = req.params
        const consulta = await this.db.getConsultaById(id)
        res.json(consulta)
    }

  
    addConsulta = async (req, res) => {
        const newConsulta = this.helpers.createConsulta(req.body);
        const result = await this.db.addConsulta(newConsulta);
        res.json(result);
    }

    modifyConsulta = async (req, res) => {
        const modifiedConsulta = this.helpers.createConsulta(req.body)
        const result = await this.db.modifyConsulta(modifiedConsulta)
        res.json(result)
    }

    deleteConsulta = async (req, res) => {
        const { id } = req.params
        const result = await this.db.deleteConsulta(id)
        res.json(result);
    }
}
